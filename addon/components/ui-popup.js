import Ember from 'ember';
import layout from '../templates/components/ui-popup';
import OptionCollect from 'ember-cli-semantic-ui/mixins/option-collect';

export default Ember.Component.extend(OptionCollect, {
  tagName: 'span',
  layout: layout,
  availableOptions: ['content', 'title', 'popup', 'position', 'transition', 'hoverable'],
  didInsertElement: function () {
    var popupOptions = this.collectOptions();

    this.$().popup(popupOptions);
  }
});
