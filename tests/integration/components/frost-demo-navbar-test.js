import {expect} from 'chai'
import {integration} from 'ember-test-utils/test-support/setup-component-test'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

const test = integration('frost-demo-navbar')
describe(test.label, function () {
  test.setup()

  it('should render', function () {
    this.render(hbs`{{frost-demo-navbar}}`)
    expect(this.$().length).to.equal(1)
  })

  it('should create navigations buttons for each link', function () {
    this.set('links', [{
      title: 'foo',
      route: 'foo'
    }])
    this.render(hbs`{{frost-demo-navbar links=links}}`)

    expect(this.$('.frost-button .text').text()).to.equal('foo')
  })
})
