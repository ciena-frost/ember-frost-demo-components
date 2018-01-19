/* globals Prism */

import Ember from 'ember'
const {$, Component, get, run} = Ember
import layout from './template'
import files from 'ember-frost-demo-components/raw'
import computed, {readOnly} from 'ember-computed-decorators'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'
import path from 'npm:path'

export default Component.extend(PropTypeMixin, {
  layout,
  classNames: ['demo-editor'],
  propTypes: {
    codeTheme: PropTypes.string,
    path: PropTypes.string.isRequired,
    showCode: PropTypes.bool,
    mode: PropTypes.string,
    collapseExplorer: PropTypes.bool
  },

  getDefaultProps () {
    return {
      codeTheme: 'mdn-like',
      documentation: '',
      path: '',
      showCode: false,
      source: '',
      mode: 'javascript',
      fileTree: [],
      collapseExplorer: true
    }
  },

  @readOnly
  @computed('showCode')
  codeClass: function (showCode) {
    return showCode ? 'active' : ''
  },

  @readOnly
  @computed('showCode')
  docClass: function (showCode) {
    return showCode ? '' : 'active'
  },

  init () {
    this._super(...arguments)

    let path = this.get('path')

    this.set('fileTree', this.rawToFileTree(path))
    this.set('source', this.getFile(`${path}/controller.js`))
    this.set('documentation', this.getFile(`${path}/README.md`))
  },

  /**
   * Converts the directory object returned from broccoli-raw into file tree nodes
   * @param {String} path - the root path
   * @returns {FileTreeNode[]} list of file tree nodes
   */
  rawToFileTree (path) {
    const rawDir = this.getFile(path)
    const fileTreeRoot = {
      name: path,
      type: 'directory',
      childNodes: []
    }

    for (const entry in rawDir) {
      if (Array.isArray(rawDir[entry])) {
        fileTreeRoot.childNodes.push({
          entry,
          type: 'directory',
          childNodes: this.rawToFileTree(rawDir[entry])
        })
      } else if (entry !== 'README.md') {
        // skip README since that's being shown separately
        fileTreeRoot.childNodes.push({
          entry,
          type: 'file',
          contents: rawDir[entry],
          childNodes: []
        })
      }
    }

    return [fileTreeRoot]
  },

  /**
   * Gets the text file at path
   * @param {String} _path - Path to file relative to tests/dummy/files
   * @returns {String} the file contents
   */
  getFile (_path) {
    let baseName = path.basename(_path)
    let dirPath = path.dirname(_path).replace(/^\./, '')

    let dir = dirPath ? get(files, dirPath.replace('/', '.')) : files
    return dir[baseName] || 'No content found'
  },

  didInsertElement () {
    this._tabClickHandler = (e) => {
      let target = $(e.target)

      run(() => {
        const showCode = target.closest('.code').length > 0
        this.set('showCode', showCode)
      })
    }

    this.$('.ribbon .tab').on('click', this._tabClickHandler)
  },

  willDestroyElement () {
    this.$('.ribbon .tab').off('click', this._tabClickHandler)
  },

  didRender () {
    Prism.highlightAll(this.$()[0])
  },

  actions: {
    onFileClick (filePath) {
      const ext = path.extname(filePath)
      const extToLang = {
        '.hbs': 'handlebars',
        '.js': 'javascript',
        '.md': 'markdown'
      }
      this.setProperties({
        'source': this.getFile(filePath),
        'mode': extToLang[ext],
        'collapseExplorer': true
      })
    }
  }
})
