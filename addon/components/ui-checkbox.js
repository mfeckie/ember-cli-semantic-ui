import Ember from 'ember';
import layout from '../templates/components/ui-checkbox';

export default Ember.Component.extend({
  classNames: ['ui', 'checkbox'],
  init: function () {
    this.set('inputId', Ember.generateGuid());
    this._super();
  },
  layout: layout,
  actions: {
    check: function () {
      this.toggleProperty('isChecked');
    }
  }
});
