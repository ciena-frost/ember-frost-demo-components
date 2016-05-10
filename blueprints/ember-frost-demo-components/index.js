module.exports = {
  description: 'Default blueprint for frost-demo-components',

  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-browserify', target: '^1.1.9'},
        {name: 'ember-frost-core', target: '>=0.2.1 <2.0.0'},
        {name: 'ivy-codemirror', target: '^1.4.0'},
        {name: 'ember-cli-showdown', target: '^2.5.0'},
        {name: 'ember-prism', target: '>=0.0.7 <2.0.0'},
        {name: 'ember-frost-popover', target: '0.0.1'}
      ]
    })
  },

  normalizeEntityName: function () {
  }
}
