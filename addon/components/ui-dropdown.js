import Ember from 'ember';
import layout from '../templates/components/ui-dropdown';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ui', 'dropdown'],
  didInsertElement () {
    var component = this;
    var selected = this.get('selected');
    this.$().dropdown({
      onChange (value /* , text, $selectedItem */) {
        component.set('selected', value);
      }
    });
    this.$().dropdown('set selected', selected);
  }
});
