var _ = require('lodash')

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment: environment,
    rootURL: '/ember-frost-demo-components',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {}
  }

  switch (environment) {
    case 'development':
      _.assign(ENV, {
        rootURL: '/'
      })
      break
    case 'test':
      _.assign(ENV, {
        rootURL: '/',
        locationType: 'none'
      })

      _.assign(ENV.APP, {
        LOG_ACTIVE_GENERATION: false,
        LOG_VIEW_LOOKUPS: false,
        rootElement: '#ember-testing'
      })

      break
  }

  return ENV
}
