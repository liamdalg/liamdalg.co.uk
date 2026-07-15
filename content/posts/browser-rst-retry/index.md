---
title: "Browsers Retry Non-Idempotent Requests"
date: 2026-07-14
tags: ["til", "chromium", "javascript"]
---

## TL;DR

I've been messing around with proxies and Chromium lately, and noticed something
I thought was odd: _browsers may silently retry any request, even POSTs which
are not idempotent_.

This is likely obvious to anyone experienced with browsers and the HTTP spec,
but it surprised me!

## Why

This behaviour is originally specified in [RFC 2616
§8.2.4](https://datatracker.ietf.org/doc/html/rfc2616#section-8.2.4) as:

> [...] if the client sees the connection close before receiving any status from the
> server, the client SHOULD retry the request.

I thought this was interesting as I expected that browsers would **only** retry
idempotent requests such as GET. Indeed, the wording was changed in the revised
[RFC 7230 §6.3.1](https://datatracker.ietf.org/doc/html/rfc7230#section-6.3.1),
but it doesn't completely rule out non-idempotent retries:

> A user agent MUST NOT automatically retry a request with a non-idempotent
> method unless it has some means to know that the request semantics are
> actually idempotent, regardless of the method, **or some means to detect that
> the original request was never applied**.

In other words, the specification allows browsers to retry any request if they
use a measure to detect whether the request was received and processed. What's
interesting is that it doesn't define what "some means" are or examples of how a
browser may go about this! So, what do browsers actually do?

Using Chromium as an example, since it's the one I know best, the logic for this
lives inside [http_network_transaction.cc](https://source.chromium.org/chromium/chromium/src/+/main:net/http/http_network_transaction.cc;drc=6bbd1f84392555826a7ef2ed96929c72895b688c;l=2106):

```c++ {lineNoStart=2106 hl_lines=[7]}
  switch (*retry_reason) {
    case RetryReason::kConnectionReset:
    case RetryReason::kConnectionClosed:
    case RetryReason::kConnectionAborted:
    case RetryReason::kSocketNotConnected:
    case RetryReason::kEmptyResponse:
      if (ShouldResendRequest()) {
```

NB: I've removed a few lines of comments from the above for brevity. The source
code gives some more detailed explanations behind each status.

```c++ {lineNoStart=2319 hl_lines=[5,6,7]}
bool HttpNetworkTransaction::ShouldResendRequest() const {
  bool connection_is_proven = stream_->IsConnectionReused();
  bool has_received_headers = GetResponseHeaders() != nullptr;

  // NOTE: we resend a request only if we reused a keep-alive connection.
  // This automatically prevents an infinite resend loop because we'll run
  // out of the cached keep-alive connections eventually.
  return connection_is_proven && !has_received_headers;
}
```

So Chromium only retries if **all** of the following are true:

1. **One** of the following errors were triggered:
   1. `kConnection{Reset,Closed,Aborted}`: The server closed the connection ungracefully.
   1. `kSocketNotConnected`: The connection used was torn down or never connected, typically seen when
      using a misconfigured proxy.
   1. `kEmptyResponse`: The response was completely empty.
1. The browser has **not received the response headers** yet.
1. The connect was **reused**.

This is more likely to happen than you think. We can trigger points 1 and 2 by
creating a server which immediately sends an RST on receipt of a request,
triggering `kConnectionReset`. As for point 3? This happens for free. Browsers
aggressively re-use connections to the same origin, so connection re-use is
probably the most likely scenario! When you navigate to a site, a connection is
established for the initial request, then up to 6 connections are maintained for
fetching sub-resources and future navigations.

## Demo

Taken together, this means we only need to create an HTTP server which:

- Exposes a single sub-resource.
- Sends an RST on the first request to that sub-resource.

Chromium should re-use the connection from the navigation for the sub-resource,
and we get two POST requests rather than one. This demo works in Firefox too,
but I haven't looked into the source code!

```javascript
const net = require("net");

// A button which sends a simple POST request
const html = `
<button onclick="run()">Send</button>
<pre id="out"></pre>
<script>
  async function run() {
    const res = await fetch('/submit', { method: 'POST' });
    const { count } = await res.json();
    document.getElementById('out').textContent = count % 2 === 0
      ? \`Retried! Server actually saw \${count} requests.\`
      : 'Server saw 1 request.';
  }
</script>`;

let count = 0;

net
  .createServer((socket) => {
    socket.on("data", (chunk) => {
      const req = chunk.toString();

      if (req.startsWith("POST /submit")) {
        count++;
        console.log(`POST #${count}`);

        // RST any odd request (so the first of each retry pair)
        if (count % 2 === 1) {
          console.log("Dropping response, sending RST");
          socket.destroy();
          return;
        }

        // otherwise, return the count!
        const body = JSON.stringify({ count });
        socket.write(
          `HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n` +
            `Content-Length: ${body.length}\r\nConnection: keep-alive\r\n\r\n${body}`,
        );
        console.log(`Responded to POST #${count} (the retry)`);
        return;
      }

      // Serve the page with keep-alive, so Chromium pools this connection for the POST
      // This also means successive clicks should cause connection re-use
      socket.write(
        `HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n` +
          `Content-Length: ${html.length}\r\nConnection: keep-alive\r\n\r\n${html}`,
      );
    });

    socket.on("error", () => {});
  })
  .listen(8080, () => console.log("Listening on http://localhost:8080"));
```

Try this yourself with `node server.js`. One click of the button should yield:

```txt
POST #1
Dropping response, sending RST
POST #2
Responded to POST #2 (the retry)
```

Note that this is HTTP/1.1 specific. HTTP/2 has a different retry mechanism
based on the fact that receipt of `REFUSED_STREAM` suggests that the request was
never processed.
