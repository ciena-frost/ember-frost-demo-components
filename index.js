/* eslint-env node */
'use strict'

const fs = require('fs')
const Funnel = require('broccoli-funnel')
const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const Raw = require('./broccoli-raw')
const VersionChecker = require('ember-cli-version-checker')
const {setSvgConfiguration} = require('ember-frost-core/utils/frost-icon-svg')

module.exports = {
  name: 'ember-frost-demo-components',

  included: function () {
    this.app = this._findHost.call(this) // eslint-disable-line no-useless-call

    // Set ember-cli-svgstore options so that consuming applications don't have to
    setSvgConfiguration.call(this, 'frost-demo-components')

    this._super.included.apply(this, arguments)
  },

  _getAddonOptions: function () {
    return (this.parent && this.parent.options) || (this.app && this.app.options) || {}
  },

  /* eslint-disable complexity */
  init: function () {
    this.options = this.options || {}
    this.options.babel = this.options.babel || {}
    this.options.babel.optional = this.options.babel.optional || []

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators')
    }

    this._super.init && this._super.init.apply(this, arguments) // eslint-disable-line no-unused-expressions
  },
  /* eslint-enable complexity */

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
