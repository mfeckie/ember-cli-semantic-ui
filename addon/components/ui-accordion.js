import Ember from 'ember';
import SettingsMixin from '../mixins/settings';

export default Ember.Component.extend(SettingsMixin, {
  classNames: ['ui', 'accordion'],
  moduleName: 'accordion'
});
