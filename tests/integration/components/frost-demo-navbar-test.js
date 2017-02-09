import {expect} from 'chai'
import hbs from 'htmlbars-inline-precompile'
import {describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('frost-demo-navbar')
describe(test.label, function () {
  test.setup()

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
})
