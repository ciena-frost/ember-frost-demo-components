var _ = require('lodash')

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment: environment,
    baseURL: '/ember-frost-demo-components',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {}
  }

  switch (environment) {
    case 'development':
      _.assign(ENV, {
        baseURL: '/'
      })
      break
    case 'test':
      _.assign(ENV, {
        baseURL: '/',
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
