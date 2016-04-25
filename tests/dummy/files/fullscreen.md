Specifying `--fullscreen` as an option will generate fullscreen pages.  The entire content is styled to fit inside the browser window dimensions.

```bash
ember generate demo my-awesome-fullscreen-demo --fullscreen --dummy --pod
```

```html
<div class='demo-container fullscreen'>
  <div class="demo-banner">
    <h1>Demo title</h1>
    <p>Demo description goes here</p>
  </div>
  <div class="demo-showcase">
    {{demo-editor path='non-fullscreen'}}
    <div class="demo-view">
    Place you demo here
    </div>
  </div>
</div>
```
