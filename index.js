/* globals module */
'use strict'

var Flatiron = require('broccoli-flatiron')
var fs = require('fs')
var Funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var path = require('path')

module.exports = {
  name: 'ember-frost-demo-components',

  included: function (app) {
    this._super.included(app)
  },

  treeForAddon: function (tree) {
    var addonTree = this._super.treeForAddon.call(this, tree)

    var filesPath = path.join(this.project.root, 'tests', 'dummy', 'files')

    if (fs.existsSync(filesPath)) {
      var allFiles = new Funnel(filesPath, {
        include: [new RegExp(/\.(md|js|css|scss|html|hbs)/)]
      })

      var flattened = Flatiron(allFiles, {
        outputFile: 'modules/ember-frost-demo-components/files.js'
      })

      return mergeTrees([
        addonTree,
        flattened
      ])
    }

    return addonTree
  }
}
