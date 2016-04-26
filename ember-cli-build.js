/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    codemirror: {
      modes: ['javascript'],
      themes: ['mdn-like']
    },
    'ember-prism': {
      theme: 'coy',
      components: ['javascript']
    },
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: []
    }
  })

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  if (app.environment === 'test') {
    app.import('bower_components/sinon-chai/lib/sinon-chai.js', {type: 'test'})
  }

  return app.toTree()
}
