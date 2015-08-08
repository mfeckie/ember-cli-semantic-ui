import Ember from 'ember';
import layout from '../templates/components/ui-radio-button';

export default Ember.Component.extend({
  layout: layout,
  isChecked: Ember.computed('value','checked', function(){
    return this.get('value') === this.get('checked');
  }),
  actions: {
    checkOption () {
      this.sendAction('checkOption', this.get('value'));
    }
  }
});
