---
title: "V8 Stack Traces"
date: 2025-09-21
---

Recently I've been playing around with errors and stack traces in Chromium.
Along the way I realised that they behave a bit ... strangely with `eval` and
you can use this to create cursed error stacks.

> When I say recently I mean "I forgot to pull this out of drafts and this was
> last year".

# Stack Format

At first glance strack traces are pretty simple: the `Error.prototype.stack`
property returns a multi-line string where each line in the string represents a
single call in the stack. For example:

```js
function f() {
  return g();
}

function g() {
  return h();
}

function h() {
  return new Error();
}

console.log(f().stack);
```

Outputs the following:

```txt {lineNos=false}
Error
    at h (stack.js:10:10)
    at g (stack.js:6:10)
    at f (stack.js:2:10)
    at stack.js:13:13
```

I'm running this with a simple HTML file which imports `stack.js` in a `script`
tag. Each line approximately has the format `at <function>
(<file>:<line>:<column>)`, where the bit in brackets is called the location.
Note that `stack.js` is actually a hyperlink to `localhost:8000/stack.js`.

We can manipulate the structure of stack traces via the V8 [stack trace
API](https://v8.dev/docs/stack-trace-api). Firstly, `Error.stackTraceLimit` can
be increased from the default of 10 to increase the maximum number of stack
frames. But the more interesting override is `Error.prepareStackTrace`. Defining
this function allows us to create our own format for `Error.prototype.stack` and
extract more useful error information not present by default. We can
even set the error stack to a well-defined structure rather than a string.
`Error.captureStackTrace` takes two arguments: the error object with which to
populate `.stack` information, and a list of `CallSite` objects.

`CallSite` objects contain a bunch of methods. Let's call them all and re-run
the example. Note that some useless functions such as `isPromiseAll` have been
removed for brevity.

```js
Error.prepareStackTrace = (err, stackTrace) => {
  return stackTrace.map((s) => ({
    getTypeName: s.getTypeName(),
    getFunction: s.getFunction(),
    getFunctionName: s.getFunctionName(),
    getMethodName: s.getMethodName(),
    getFileName: s.getFileName(),
    getLineNumber: s.getLineNumber(),
    getColumnNumber: s.getColumnNumber(),
    getEvalOrigin: s.getEvalOrigin(),
  }));
};

console.log(f().stack);
```

which outputs:

```json {lineNos=false}
[
  {
    "getTypeName": null,
    "getFunctionName": "h",
    "getMethodName": "h",
    "getFileName": "stack.js",
    "getLineNumber": 10,
    "getColumnNumber": 10
  },
  {
    "getTypeName": null,
    "getFunctionName": "g",
    "getMethodName": "g",
    "getFileName": "stack.js",
    "getLineNumber": 6,
    "getColumnNumber": 10
  },
  {
    "getTypeName": null,
    "getFunctionName": "f",
    "getMethodName": "f",
    "getFileName": "stack.js",
    "getLineNumber": 2,
    "getColumnNumber": 10
  },
  {
    "getTypeName": null,
    "getFunctionName": null,
    "getMethodName": null,
    "getFileName": "stack.js",
    "getLineNumber": 13,
    "getColumnNumber": 13
  }
]
```

If you wanted to re-implement the default stack format using this function, it
would look something like this:

```js
Error.prepareStackTrace = (err, stackTrace) => {
  const stack = stackTrace.map(
    (s) =>
      `\tat ${
        s.getFunctionName() || s.getMethodName() || "<anonymous>"
      } (${s.getFileName()}:${s.getLineNumber()}:${s.getColumnNumber()})`
  );
  return "Error\n" + stack.join("\n");
};
```

The above isn't totally accurate --- other cases such as constructors and
asynchronous functions are handled differently, but that's not important for us
right now. If you're interested, the V8 docs detail the extra information that
is added. But what happens when we add `eval` into the mix?

# Eval is Evil

```js {lineNoStart=13}
console.log(
  eval(`// 1
    // 2
    // 3
    // 4
    f().stack
  `)
);
```

```txt {lineNos=false}
Error
    at h (stack.js:10:10)
    at g (stack.js:6:10)
    at f (stack.js:2:10)
    at eval (eval at <anonymous> (stack.js:14:3), <anonymous>:5:5)
    at stack.js:14:3
```

What's going on here? Why is `eval` present both in the function name and the
location? Why are there two parts to the location? Running our structured error
stack override from before (this time with `null` or `undefined` values removed
for brevity) helps to break it down:

```json {lineNos=false}
[
  {
    "getFunctionName": "h",
    "getMethodName": "h",
    "getFileName": "stack.js",
    "getLineNumber": 10,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "g",
    "getMethodName": "g",
    "getFileName": "stack.js",
    "getLineNumber": 6,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "f",
    "getMethodName": "f",
    "getFileName": "stack.js",
    "getLineNumber": 2,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "eval",
    "getLineNumber": 5,
    "getColumnNumber": 5,
    "getEvalOrigin": "eval at <anonymous> (stack.js:14:3)"
  },
  {
    "getFileName": "stack.js",
    "getLineNumber": 14,
    "getColumnNumber": 3
  }
]
```

The call to `eval`, as you would expect, creates an entry with function name
`eval`, but also adds some extra context to the location called the eval origin.
The eval origin is a "string representing the location where eval was called".
We can see that `eval` lines have the format `eval (eval at <x>, <y>)`, where
`x` is the location where `eval` itself was called (i.e., the eval origin), and
`y` is the location of the function call within the `eval`. In this case, we
called `f` on line 5 of the anonymous function passed to `eval` and `eval`
itselfon line 14 of the script.

Named functions themselves can be defined inside of an `eval`, and they too will
have an `eval` origin even if not called from within `eval`.

```js {lineNoStart=13}
eval(`
    function x() {
        return f();
    }
`);

console.log(x().stack);
```

```txt {lineNos=false}
Error
    at h (stack.js:10:10)
    at g (stack.js:6:10)
    at f (stack.js:2:10)
    at x (eval at <anonymous> (stack.js:13:1), <anonymous>:3:16)
    at stack.js:19:13
```

```json {lineNos=false}
[
  {
    "getFunctionName": "h",
    "getMethodName": "h",
    "getFileName": "stack.js",
    "getLineNumber": 10,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "g",
    "getMethodName": "g",
    "getFileName": "stack.js",
    "getLineNumber": 6,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "f",
    "getMethodName": "f",
    "getFileName": "stack.js",
    "getLineNumber": 2,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "x",
    "getMethodName": "x",
    "getLineNumber": 3,
    "getColumnNumber": 16,
    "getEvalOrigin": "eval at <anonymous> (stack.js:13:1)"
  },
  {
    "getFileName": "stack.js",
    "getLineNumber": 19,
    "getColumnNumber": 13
  }
]
```

Things get a bit more weird when we use [indirect
eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval).
You can think of indirect `eval` as any call to `eval` which is not simply
`eval`. `const e = eval; e('foo')` and even `window.eval` are indirect. Calling
`eval` in indirect mode is, as MDN states, equivalent to "[evaluating] the code
within a separate `<script>` tag". That is, it works within the global scope and
doesn't have access to locally captured scope. An easy way to demonstrate this
is to try to print a variable which is only defined in the local scope and
observe that `window.eval` errors.

```js
{
  const x = 3;
  eval("console.log(x)");
  window.eval("console.log(x)");
}
```

```txt {lineNos=false}
3
Uncaught ReferenceError: x is not defined
```

So what happens to our error stack from before when we use indirect eval?

```js {lineNoStart=13}
console.log(
  window.eval(`// 1
    // 2
    // 3
    // 4
    f().stack
  `)
);
```

```txt {lineNos=false}
Error
    at h (stack.js:10:10)
    at g (stack.js:6:10)
    at f (stack.js:2:10)
    at eval (eval at <anonymous> (stack.js:14:3), <anonymous>:5:5)
    at eval (<anonymous>)
    at stack.js:14:3
```

The stack is exactly the same, except we have a rogue `at eval (<anonymous>)`
which is missing location and eval origin information. I'm not sure why this
happens, but I suspect the seperate "script" context effectively becomes the
empty `at eval (<anonymous>)`. I don't know why this ends up having empty line
and column number information, though. Checking our data-structure stack
version, we can see that all of the functions return either `null` or
`undefined`:

```json {lineNos=false}
[
  {
    "getFunctionName": "h",
    "getMethodName": "h",
    "getFileName": "stack.js",
    "getLineNumber": 10,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "g",
    "getMethodName": "g",
    "getFileName": "stack.js",
    "getLineNumber": 6,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "f",
    "getMethodName": "f",
    "getFileName": "stack.js",
    "getLineNumber": 2,
    "getColumnNumber": 10
  },
  {
    "getFunctionName": "eval",
    "getMethodName": null,
    "getLineNumber": 5,
    "getColumnNumber": 5,
    "getEvalOrigin": "eval at <anonymous> (stack.js:15:3)"
  },
  {
    "getFunctionName": "eval"
  },
  {
    "getFileName": "stack.js",
    "getLineNumber": 15,
    "getColumnNumber": 3
  }
]
```

We can use all of these oddities to create a truly cursed stack. Oh, did
I mention that the location supports nested calls to `eval`?

```js
Error.stackTraceLimit = 50;
const evil = eval;
evil(`
    function f() {
        return evil('evil("g()")');
    }
`);

eval(`
    function g() {
        return evil('eval("h()")');
    }
`);

evil(`
    eval("function h() { return eval('new Error()'); }")
`);

console.log(eval("f().stack"));
```

```txt {lineNos=false}
Error
    at eval (eval at h (eval at <anonymous> (eval at <anonymous> (stack.js:15:1))), <anonymous>:1:1)
    at h (eval at <anonymous> (eval at <anonymous> (stack.js:15:1)), <anonymous>:1:23)
    at eval (eval at <anonymous> (eval at g (eval at <anonymous> (stack.js:9:1))), <anonymous>:1:1)
    at eval (eval at g (eval at <anonymous> (stack.js:9:1)), <anonymous>:1:1)
    at eval (<anonymous>)
    at g (eval at <anonymous> (stack.js:9:1), <anonymous>:3:16)
    at eval (eval at <anonymous> (eval at f (eval at <anonymous> (stack.js:3:1))), <anonymous>:1:1)
    at eval (<anonymous>)
    at eval (eval at f (eval at <anonymous> (stack.js:3:1)), <anonymous>:1:1)
    at eval (<anonymous>)
    at f (eval at <anonymous> (stack.js:3:1), <anonymous>:3:16)
    at eval (eval at <anonymous> (stack.js:19:13), <anonymous>:1:1)
    at stack.js:19:13
```

Asking someone to guess the output of that script feels like an incredibly
cruel interview question.

For completeness, here's the structured version. You can see that most of the
information is wrapped up in `getEvalOrigin` unfortunately.

```json {lineNos=false}
[
  {
    "getFunctionName": "eval",
    "getLineNumber": 1,
    "getColumnNumber": 1,
    "getEvalOrigin": "eval at h (eval at <anonymous> (eval at <anonymous> (stack.js:15:1)))"
  },
  {
    "getFunctionName": "h",
    "getMethodName": "h",
    "getLineNumber": 1,
    "getColumnNumber": 23,
    "getEvalOrigin": "eval at <anonymous> (eval at <anonymous> (stack.js:15:1))"
  },
  {
    "getFunctionName": "eval",
    "getLineNumber": 1,
    "getColumnNumber": 1,
    "getEvalOrigin": "eval at <anonymous> (eval at g (eval at <anonymous> (stack.js:9:1)))"
  },
  {
    "getFunctionName": "eval",
    "getLineNumber": 1,
    "getColumnNumber": 1,
    "getEvalOrigin": "eval at g (eval at <anonymous> (stack.js:9:1))"
  },
  {
    "getFunctionName": "eval"
  },
  {
    "getFunctionName": "g",
    "getMethodName": "g",
    "getLineNumber": 3,
    "getColumnNumber": 16,
    "getEvalOrigin": "eval at <anonymous> (stack.js:9:1)"
  },
  {
    "getFunctionName": "eval",
    "getLineNumber": 1,
    "getColumnNumber": 1,
    "getEvalOrigin": "eval at <anonymous> (eval at f (eval at <anonymous> (stack.js:3:1)))"
  },
  {
    "getFunctionName": "eval"
  },
  {
    "getFunctionName": "eval",
    "getLineNumber": 1,
    "getColumnNumber": 1,
    "getEvalOrigin": "eval at f (eval at <anonymous> (stack.js:3:1))"
  },
  {
    "getFunctionName": "eval"
  },
  {
    "getFunctionName": "f",
    "getMethodName": "f",
    "getLineNumber": 3,
    "getColumnNumber": 16,
    "getEvalOrigin": "eval at <anonymous> (stack.js:3:1)"
  },
  {
    "getFunctionName": "eval",
    "getLineNumber": 1,
    "getColumnNumber": 1,
    "getEvalOrigin": "eval at <anonymous> (stack.js:19:13)"
  },
  {
    "getFileName": "stack.js",
    "getLineNumber": 19,
    "getColumnNumber": 13
  }
]
```
