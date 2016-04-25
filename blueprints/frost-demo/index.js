var path = require('path')

module.exports = {
  description: 'Generates a frost demo route',

  locals: function (options) {
    if (!options.pod) {
      throw new Error('Must use with pods')
    }

    return {
      'fullscreenClass': options.fullscreen ? 'fullscreen' : ''
    }
  },

  fileMapTokens: function () {
    return {
      __rootdir__: function (options) {
        if (options.inDummy) {
          return path.join('tests', 'dummy')
        }
        return '/'
      },
      // overriding to always returning module name despite being a pod
      __name__: function (options) {
        return options.dasherizedModuleName
      }
    }
  }
}
