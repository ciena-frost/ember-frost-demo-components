/* globals module */
'use strict'

var Flatiron = require('broccoli-flatiron')
var fs = require('fs')
var Funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var path = require('path')
var Raw = require('./broccoli-raw')
var log = require('broccoli-stew').log

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

    var filesPath = path.join(this.project.root, 'tests', 'dummy', 'files')
    var podPath = path.join(this.project.root, 'tests', 'dummy', 'app', 'pods')

    if (fs.existsSync(filesPath)) {
      var allFiles = new Funnel(filesPath, {
        include: [new RegExp(/\.(md|js|css|scss|html|hbs)/)]
      })
      var podFiles = new Funnel(podPath, {
        include: [new RegExp(/\.(md|js|css|scss|html|hbs)/)]
      })

      var flattened = Flatiron(allFiles, {
        outputFile: 'modules/ember-frost-demo-components/files.js'
      })

      var jsonTree = new Raw([log(podFiles, {output: 'tree', label: 'broccoli-raw'})], {
        destDir: 'modules/ember-frost-demo-components',
        name: 'raw'
      })

      return log(mergeTrees([
        jsonTree,
        addonTree,
        flattened
      ]), {output: 'tree', label: 'addon'})
    }

    return addonTree
  }
}
