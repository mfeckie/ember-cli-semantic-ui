import Ember from 'ember';
import layout from '../templates/components/ui-modal';

export default Ember.Component.extend({
  layout: layout,
  moduleName: 'modal',
  didInsertElement () {
    const modalElement = this.$('.ui.modal');

    const triggerElement = this.get('triggerElement') || '.ui.button';

    this.$(triggerElement).on('click', () => {
      modalElement.modal('toggle');
    });
  },
  willDestroyElement() {
    this.$()[this.get('moduleName')]('destroy');
    this._super();
  }
});
