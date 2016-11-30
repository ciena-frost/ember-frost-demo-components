import Ember from 'ember'
import config from './config/environment'

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('non-fullscreen', { path: '/' })
  this.route('fullscreen')
})

export default Router
