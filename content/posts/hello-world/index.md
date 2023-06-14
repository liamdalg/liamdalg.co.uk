---
title: "Hello World"
date: 2023-06-06T23:19:23+01:00
---

Hello

Test sample:
```go
func (w *Worker) DoStuff(params *Params) error {
  for _, x := range params.Items {
    // blah blah
    if err != nil {
      return fmt.Errorf("something went bad: %w", err)
    }
  }

  return nil
}
```