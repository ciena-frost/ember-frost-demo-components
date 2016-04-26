# frost-demo-navbar

Navigation menus or frost demos

 * [API](#api)
 * [Examples](#examples)

## API

| Attribute   | Type | Description |
| ----------- | ---- | ----------- |
| `links` | `array(link)` | path to source file relative to `tests/dummy/files` |

### Link Configuration

| Attribute   | Type | Description |
| ----------- | ---- | ----------- |
| `title` | `string` | menu title |
| `route` | `string` | route name for demo page |
| `links` | `array(link)` | cascaded links (only supports 2 levels deep) |

## Examples

```javascript
links=[
  {
    title: 'Top Level',
    route: 'top-level',
    links: [
      {
        title: 'Sub Level'
        route: 'sub-level'
      }
    ]
  }
]
```

```hbs
{{frost-demo-navbar links=links}}
```
