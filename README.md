[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-demo-components.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-demo-components

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-demo-components.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-demo-components

[npm-img]: https://img.shields.io/npm/v/ember-frost-demo-components.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-demo-components

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-demo-components

A collection of components and blueprints for showcasing frost components

 * [Installation](#installation)
 * [Getting Started](#getting-started)
 * [Components](#components)
 * [Blueprints](#blueprints)
 * [Contributing](#development)


## Installation
```
ember install ember-frost-demo-components
```

## Getting Started

1. This *addon* installs `CodeMirror` and `Prism` for source editing and syntax highlighting.  You must update `ember-cli-build.js` to include options for those *addons* to bring in necessary bower modules.

  ```js
  var app = EmberApp(defaults, {
    codemirror: {
      modes: ['javascript'],
      // frost-demo-editor defaults to 'mdn-like'
      themes: ['mdn-like']
    },
    'ember-prism': {
      // whatever your preference
      theme: 'coy',
      components: ['javascript']
    }
    ...
  })
  ```

2. Update your application template to include `frost-demo-navbar`

  ```hbs
  {{frost-demo-bar links=links}}
  {{outlet}}
  ```

3. Update your application controller with navigation links

  ```js
  export default Ember.Controller.extend({
    links: [
      {
        title: 'Demo Title',
        route: 'demo-route'
      }
    ]
  })
  ```

4. Generate a demo

  ```bash
  ember generate frost-demo my-demo --dummy --pod
  ```

  This generates the following files
  ```
  tests/dummy
    └── files
      └── my-demo.js
      └── my-demo.md
    └── app/pods
      └── my-demo
        └── controller.js
        └── route.js
        └── template.hbs
  ```

5. Update `my-demo.js` and `my-demo.md` with the source code and documentation.

6. Update `router.js` with the new routes.

  ```js
  router.map('my-demo')
  ```

7. Continue steps 3-6 for each demo you want to generate.

## Components

The following components are available when you install ember-frost-demo-components

* [frost-demo-editor](frost-demo-editor.md)
* [frost-demo-navbar](frost-demo-navbar.md)

## Blueprints

This *addon* makes the `frost-demo` blueprint available to use to streamline creating demo pages.

```bash
ember generate frost-demo demo-1 --dummy --pod

# with fullscreen
ember generate frost-demo demo-2 --fullscreen --dummy --pod
```

## Development

### Setup
```
git clone git@github.com:ciena-frost/ember-frost-demo-components.git
cd ember-frost-demo-components
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-core/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
