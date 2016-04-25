/* globals Prism */

import Ember from 'ember'
import layout from './template'
import files from 'ember-frost-demo-components/files'

export default Ember.Component.extend({
  layout,
  classNames: ['demo-editor'],
  showCode: false,
  path: '',
  documentation: '',
  source: '',
  codeTheme: 'mdn-like',

  codeClass: Ember.computed('showCode', function () {
    return this.get('showCode') ? 'active' : ''
  }),

  docClass: Ember.computed('showCode', function () {
    return this.get('showCode') ? '' : 'active'
  }),

  init () {
    this._super(...arguments)

    let path = this.get('path')
    this.set('source', this.getFile(`${path}.js`))
    this.set('documentation', this.getFile(`${path}.md`))
  },

  /**
   * Gets the text file at path
   * @param {String} path - Path to file relative to tests/dummy/files
   * @returns {String} the file contents
   */
  getFile (path) {
    let key = path.replace('/', '.')

    return files[key] || 'No content found'
  },

  didInsertElement () {
    this.$('.ribbon .tab').click((e) => {
      let target = Ember.$(e.target)

      Ember.run(() => {
        if (target.closest('.code').length > 0) {
          this.set('showCode', true)
        } else {
          this.set('showCode', false)
        }
      })
    })
  },

  didRender () {
    Prism.highlightAll(this.$()[0])
  }
})
