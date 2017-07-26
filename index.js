/* eslint-env node */
'use strict'

var fs = require('fs')
var Funnel = require('broccoli-funnel')
var mergeTrees = require('broccoli-merge-trees')
var path = require('path')
var Raw = require('./broccoli-raw')
var VersionChecker = require('ember-cli-version-checker')

module.exports = {
  name: 'ember-frost-demo-components',

  _getAddonOptions: function () {
    return (this.parent && this.parent.options) || (this.app && this.app.options) || {}
  },

  init: function () {
    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.optional = this.options.babel.optional || []

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators')
    }

    this._super.init && this._super.init.apply(this, arguments)
  },

  included: function (app) {
    this._super.included(app)
  },

  treeForAddon: function (tree) {
    const addonTree = this._super.treeForAddon.call(this, tree)
    const podPath = path.join(this.project.root, 'tests', 'dummy', 'app', 'pods')

    if (fs.existsSync(podPath)) {
      const podFiles = new Funnel(podPath, {
        include: [new RegExp(/\.(md|js|css|scss|html|hbs)/)]
      })

      const checker = new VersionChecker(this)
      const isEmberCliAbove12 = checker.for('ember-cli').satisfies('>= 2.12.0')
      let outputTree

      if (isEmberCliAbove12) {
        const addonOptions = this._getAddonOptions()
        if (addonOptions && addonOptions.babel) {
          const BabelTranspiler = require('broccoli-babel-transpiler')

          const outputTreeRaw = new Raw([podFiles], {
            destDir: 'ember-frost-demo-components',
            name: 'raw'
          })

          outputTree = new Funnel(new BabelTranspiler(outputTreeRaw, addonOptions.babel), {
            destDir: 'modules/'
          })
        }
      } else {
        outputTree = new Raw([podFiles], {
          destDir: 'modules/ember-frost-demo-components',
          name: 'raw'
        })
      }

      return mergeTrees([addonTree, outputTree])
    }

    return addonTree
  }
}
