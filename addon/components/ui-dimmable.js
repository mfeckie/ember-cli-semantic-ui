import Ember from 'ember';
import SettingsMixin from '../mixins/settings';

export default Ember.Component.extend(SettingsMixin, {
  classNames: ['ui', 'dimmable'],
  moduleName: 'dimmer',
  click() {
    if(this.get('targetElement')) {
      return this.$(this.get('targetElement')).dimmer('toggle');
    }
    this.$().dimmer('toggle');
  }
});
