import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

  htmlChecked: Ember.computed('value', 'checked', function() {
    return this.get('value') === this.get('checked');
  }),

  change() {
    this.set('checked', this.get('value'));
  }
});
