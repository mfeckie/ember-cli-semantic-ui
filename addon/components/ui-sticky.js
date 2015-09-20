import Ember from 'ember';
import SettingsMixin from '../mixins/settings';
import layout from '../templates/components/ui-sticky';

export default Ember.Component.extend(SettingsMixin, {
  layout: layout,
  classNames: ['ui', 'sticky'],
  moduleName: 'sticky',
  didInsertElement () {
    if(this.get('targetElement')) {
      this.setSettings({
        context: this.get('targetElement')
      });
    }
    this._super();
  }
});
