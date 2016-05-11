/* globals module */
'use strict'

var fs = require('fs')
var Funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var path = require('path')
var Raw = require('./broccoli-raw')

module.exports = {
  name: 'ember-frost-demo-components',

  init: function () {
    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.optional = this.options.babel.optional || []

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators')
    }
  },

  included: function (app) {
    this._super.included(app)
  },

  treeForAddon: function (tree) {
    var addonTree = this._super.treeForAddon.call(this, tree)
    var podPath = path.join(this.project.root, 'tests', 'dummy', 'app', 'pods')

    if (fs.existsSync(podPath)) {
      var podFiles = new Funnel(podPath, {
        include: [new RegExp(/\.(md|js|css|scss|html|hbs)/)]
      })

      var jsonTree = new Raw([podFiles], {
        destDir: 'modules/ember-frost-demo-components',
        name: 'raw'
      })

      return mergeTrees([
        jsonTree,
        addonTree
      ])
    }

    return addonTree
  }
}
