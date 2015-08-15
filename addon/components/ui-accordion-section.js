import Ember from 'ember';
import layout from '../templates/components/ui-accordion-section';

export default Ember.Component.extend({
  layout: layout,
  action: 'accordionToggle',
  targetObject: Ember.computed.alias('parentView'),
  actions: {
    accordionToggle () {
      this.sendAction('action',this.$('.title, .content'));
    }
  }
});
