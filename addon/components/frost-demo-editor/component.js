/* globals Prism */

import Ember from 'ember'
import layout from './template'
import files from 'ember-frost-demo-components/files'
import computed, {readOnly} from 'ember-computed-decorators'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

export default Ember.Component.extend(PropTypeMixin, {
  layout,
  classNames: ['demo-editor'],
  propTypes: {
    codeTheme: PropTypes.string,
    path: PropTypes.string.isRequired,
    showCode: PropTypes.bool
  },

  getDefaultProps () {
    return {
      codeTheme: 'mdn-like',
      documentation: '',
      path: '',
      showCode: false,
      source: ''
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
    this._tabClickHandler = (e) => {
      let target = Ember.$(e.target)

      Ember.run(() => {
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
  }
})
