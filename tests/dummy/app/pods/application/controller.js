import Ember from 'ember'

export default Ember.Controller.extend({
  links: [
    {
      title: 'Non-fullscreen',
      route: 'non-fullscreen'
    },
    {
      title: 'Fullscreen',
      route: 'fullscreen'
    },
    {
      title: 'Example multi level menus',
      links: [{
        title: 'Non-fullscreen',
        route: 'non-fullscreen'
      }, {
        title: 'Fullscreen',
        route: 'fullscreen'
      }]
    }
  ]
})
