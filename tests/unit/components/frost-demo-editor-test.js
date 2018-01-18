/* globals Prism */
/* eslint-env node */
import {expect} from 'chai'
import Ember from 'ember'
const {run} = Ember

import {unit} from 'ember-test-utils/test-support/setup-component-test'
import {afterEach, beforeEach, describe, it} from 'mocha'
import sinon from 'sinon'

const test = unit('frost-demo-editor',
  [
    'component:ivy-codemirror',
    'component:markdown-to-html',
    'component:frost-file-explorer',
    'component:frost-file-node',
    'component:frost-icon',
    'helper:not',
    'helper:and'
  ]
)
describe(test.label, function () {
  test.setup()

  let component, sandbox
  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    sandbox.spy(Prism, 'highlightAll')
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('computed property codeClass', function () {
    it('should return active when showCode is true', function () {
      component = this.subject({
        path: 'fullscreen',
        showCode: true
      })

      expect(component.get('codeClass')).to.equal('active')
    })

    it('should return active when showCode is false', function () {
      component = this.subject({
        path: 'fullscreen',
        showCode: false
      })

      expect(component.get('codeClass')).to.equal('')
    })
  })

  describe('computed property docClass', function () {
    it('should return active when showCode is not true', function () {
      component = this.subject({
        path: 'fullscreen',
        showCode: false
      })

      expect(component.get('docClass')).to.equal('active')
    })

    it('should return active when showCode is true', function () {
      component = this.subject({
        path: 'fullscreen',
        showCode: true
      })

      expect(component.get('docClass')).to.equal('')
    })
  })

  describe('afterRender', function () {
    beforeEach(function () {
      component = this.subject({
        path: 'fullscreen',
        showCode: false
      })
      this.render()
    })

    it('should call Prism.highlightAll', function () {
      expect(Prism.highlightAll).to.have.callCount(1)
    })

    // FIXME: get test passing again (MRD - 2017-01-10)
    it.skip('should set up click events for the ribbon capsules', function (done) {
      this.$('.ribbon .code').click()
      run(() => {
        expect(component.get('showCode')).to.equal(true)
        done()
      })
    })
  })
})
