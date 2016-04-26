import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-demo-navbar',
  'Integration: EmberFrostDemoComponents - frost-demo-navbar',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{frost-demo-navbar}}`)
      expect(this.$().length).to.equal(1)
    })

    it('creates navigations buttons for each link', function () {
      this.set('links', [{
        title: 'foo',
        route: 'foo'
      }])
      this.render(hbs`{{frost-demo-navbar links=links}}`)

      expect(this.$('.frost-button .text').text()).to.equal('foo')
    })
  }
)
