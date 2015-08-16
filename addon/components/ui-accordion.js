import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'accordion'],
  didInsertElement: function () {
    this._super();
    this.$().accordion();
  }
});
