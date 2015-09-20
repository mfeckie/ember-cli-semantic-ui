import Ember from 'ember';
import SettingsMixin from '../mixins/settings';
import layout from '../templates/components/ui-checkbox';

export default Ember.Component.extend(SettingsMixin, {
  classNames: ['ui', 'checkbox'],
  moduleName: 'checkbox',
  init: function () {
    this.set('inputId', Ember.generateGuid());
    this._super();
  },
  layout: layout,
  actions: {
    check() {
      this.toggleProperty('isChecked');
    }
  }
});
