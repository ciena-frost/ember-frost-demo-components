module.exports = {
  description: 'Default blueprint for frost-demo-components',

  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-browserify', target: '^1.2.0'},
        {name: 'ember-frost-core', target: '1.23.10'},
        {name: 'ivy-codemirror', target: '^2.1.0'},
        {name: 'ember-cli-showdown', target: '^2.5.0'},
        {name: 'ember-prism', target: '0.0.8'},
        {name: 'ember-frost-popover', target: '4.2.11'}
      ]
    })
  },

  normalizeEntityName: function () {
  }
}
