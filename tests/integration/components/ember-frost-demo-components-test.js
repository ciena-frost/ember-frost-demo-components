import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'ember-frost-demo-components',
  'Integration: EmberFrostDemoComponentsComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#ember-frost-demo-components}}
      //     template content
      //   {{/ember-frost-demo-components}}
      // `)

      this.render(hbs`{{ember-frost-demo-components}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
