/* globals blanket, module */

var options = {
  modulePrefix: 'ember-frost-demo-components',
  filter: '//.*ember-frost-demo-components/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
    lcovOptions: {
      outputFile: 'coverage/lcov.info',
      renamer (fileName) {
        return fileName.replace('ember-frost-demo-components', 'addon') + '.js'
      }
    }
  }
}

if (typeof exports === 'undefined') {
  blanket.options(options)
} else {
  module.exports = options
}
