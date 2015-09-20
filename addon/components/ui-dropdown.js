import Ember from 'ember';
import layout from '../templates/components/ui-dropdown';
import SettingsMixin from '../mixins/settings';

export default Ember.Component.extend(SettingsMixin, {
  layout: layout,
  classNames: ['ui', 'dropdown'],
  moduleName: 'dropdown',
  didInsertElement () {
    var component = this;
    var selected = this.get('selected');
    this.setSettings({
      onChange (value /* , text, $selectedItem */) {
        component.set('selected', value);
      }
    });
    this._super();
    this.$().dropdown('set selected', selected);
  }
});
