# frost-demo-editor

A viewer for the demo source with live-editing support in the near future.

 * [API](#api)
 * [Examples](#examples)

## API

| Attribute   | Type | Description |
| ----------- | ---- | ----------- |
| `path` | `string` | path to source file relative to `tests/dummy/files` |
| `codeTheme` | `string` | name of the CodeMirror theme |

## Examples

```
tests/dummy
  └── files
    └── foo.js
    └── foo.md
```

```hbs
{{frost-demo-editor path='foo'}}
```
