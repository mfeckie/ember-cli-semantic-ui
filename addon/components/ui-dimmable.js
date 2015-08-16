import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'dimmable'],
  click() {
    if(this.get('targetElement')) {
      return this.$(this.get('targetElement')).dimmer('toggle');
    }
    this.$().dimmer('toggle');
  }
});
