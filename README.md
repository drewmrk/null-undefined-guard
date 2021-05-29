# null-undefined-guard

Guard against null and undefined values

## Examples/Usage

```js
import nullUndefinedGuard from 'null-undefined-guard'

nullUndefinedGuard(element, name?, logic?)

let e = [3, 4, 5]

nullUndefinedGuard(e, 'Array', () => {
  console.log('Test')
  return e
})

nullUndefinedGuard(e).push(46)
```
