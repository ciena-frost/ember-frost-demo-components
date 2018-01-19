By default, the demo blueprint will create non-fullscreen pages giving you the ability to scroll. This is useful
if you can't fit your demo in the confines of browser window dimensions or if you'd rather not have an
inner scroll behavior for the source files.

```bash
ember generate demo my-awesome-demo --dummy --pod
```

```html
<div class='demo-container'>
  <div class="demo-banner">
    <h1>Demo title</h1>
    <p>Demo description goes here</p>
  </div>
  <div class="demo-showcase">
    {{frost-demo-editor path='non-fullscreen'}}
    <div class="demo-view">
    Place you demo here
    </div>
  </div>
</div>
```
