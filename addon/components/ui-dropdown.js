import Ember from 'ember';
import layout from '../templates/components/ui-dropdown';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  layout: layout,
  classNames: ['ui', 'dropdown'],
  moduleName: 'dropdown',
  didInsertElement () {
    var component = this;
    var selected = this.get('selected');
    this.setSemanticConfiguration({
      onChange (value /* , text, $selectedItem */) {
        component.set('selected', value);
      }
    });
    this._super();
    this.$().dropdown('set selected', selected);
  }
});
