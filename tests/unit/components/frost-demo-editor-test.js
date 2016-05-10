/* globals describe, beforeEach, afterEach, Prism */

import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import sinon from 'sinon'
import {registryHelper} from 'ember-test-utils'
import resolver from '../../helpers/resolver'

describeComponent(
  'frost-demo-editor',
  'Unit: EmberFrostDemoComponents - frost-demo-editor',
  {
    unit: true,

    needs: [
      'component:ivy-codemirror',
      'component:markdown-to-html',
      'component:frost-file-explorer',
      'helper:if'
    ],

    beforeSetup () {
      registryHelper.setup(resolver, {
        'component:ivy-codemirror': Ember.Component.extend({}),
        'component:markdown-to-html': Ember.Component.extend({}),
        'component:frost-file-explorer': Ember.Component.extend({})
      })
    },

    teardown () {
      registryHelper.teardown()
    }
  },
  function () {
    let component, sandbox
    beforeEach(function () {
      sandbox = sinon.sandbox.create()
      sandbox.spy(Prism, 'highlightAll')
    })

    afterEach(function () {
      sandbox.restore()
    })

    describe('computed propety codeClass', function () {
      it('computed property codeClass returns active when showCode is true', function () {
        component = this.subject({
          showCode: true
        })

        expect(component.get('codeClass')).to.equal('active')
      })

      it('computed property codeClass returns active when showCode is false', function () {
        component = this.subject({
          showCode: false
        })

        expect(component.get('codeClass')).to.equal('')
      })
    })

    describe('computed property docClass', function () {
      it('computed property docClass returns active when showCode is not true', function () {
        component = this.subject({
          showCode: false
        })

        expect(component.get('docClass')).to.equal('active')
      })

      it('computed property docClass returns active when showCode is true', function () {
        component = this.subject({
          showCode: true
        })

        expect(component.get('docClass')).to.equal('')
      })
    })

    describe('afterRender', () => {
      beforeEach(function () {
        component = this.subject({
          showCode: false
        })
        this.render()
      })

      it('calls Prism.highlightAll', function () {
        expect(Prism.highlightAll).to.have.been.called
      })

      it('sets up click events for the ribbon capsules', function (done) {
        this.$('.ribbon .code').click()
        Ember.run(() => {
          expect(component.get('showCode')).to.equal(true)
          done()
        })
      })
    })
  }
)
