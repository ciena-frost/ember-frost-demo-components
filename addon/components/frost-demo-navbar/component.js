import Ember from 'ember'
const {Component} = Ember
import layout from './template'

export default Component.extend({
  layout,
  classNames: ['demo-navbar-container'],
  hook: 'demo'
})
