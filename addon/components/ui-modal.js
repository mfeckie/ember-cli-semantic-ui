import Ember from 'ember';
import layout from '../templates/components/ui-modal';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement () {
    var modalElement = this.$('.ui.modal');

    var triggerElement = this.get('triggerElement') || '.ui.button';


    this.$(triggerElement).on('click', function () {
      modalElement.modal('toggle');
    });
  }
});
