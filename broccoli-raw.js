'use strict'

const Plugin = require('broccoli-caching-writer')
const path = require('path')
const fs = require('fs')
const utils = require('util')
const mkdirp = require('mkdirp')
const _ = require('lodash')

/**
 * reads a directory into an object
 * @param {String} srcDir - source directory
 * @returns {Object} an object containing the directory file contents
 */
function readDirectory (srcDir) {
  let srcTree = {}
  const entries = fs.readdirSync(srcDir)

  entries.forEach(function (entry) {
    const filePath = path.join(srcDir, entry)
    if (fs.lstatSync(filePath).isDirectory()) {
      srcTree[entry] = readDirectory(filePath)
    } else {
      srcTree[entry] = fs.readFileSync(filePath, {
        encoding: 'utf8'
      })
    }
  })

  return srcTree
}

/**
 * RawPlugin
 * @param {InputNode[]} inputNodes - list of broccoli input nodes
 * @param {Object} options - plugin options
 * @class
 */
const RawPlugin = function (inputNodes, options) {
  options = options || {}
  Plugin.call(this, inputNodes, {
    annotations: options.annotations
  })
  this.options = options
}

utils.inherits(RawPlugin, Plugin)

/**
 * Plugin builder
 */
RawPlugin.prototype.build = function () {
  let dirTree = {}
  const destDir = this.options.destDir || ''
  const fileName = (this.options.name || 'raw') + '.js'

  // merge all inputPaths
  this.inputPaths.forEach(function (inputPath) {
    _.assign(dirTree, readDirectory(inputPath))
  })

  const jsSrc = 'export default ' + JSON.stringify(dirTree)
  const outputFile = path.join(this.outputPath, destDir, fileName)

  mkdirp.sync(path.dirname(outputFile))

  fs.writeFileSync(outputFile, jsSrc)
}

module.exports = RawPlugin
