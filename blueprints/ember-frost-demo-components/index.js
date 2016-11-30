module.exports = {
  description: 'Default blueprint for frost-demo-components',

  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-browserify', target: '^1.1.13'},
        {name: 'ember-frost-core', target: '^1.0.0'},
        {name: 'ivy-codemirror', target: '^1.4.0'},
        {name: 'ember-cli-showdown', target: '^2.5.0'},
        {name: 'ember-prism', target: '>=0.0.7 <2.0.0'},
        {name: 'ember-frost-popover', target: '^4.0.0'}
      ]
    })
  },

  normalizeEntityName: function () {
  }
}
