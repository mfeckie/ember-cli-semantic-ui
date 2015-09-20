import Ember from 'ember';
import SettingsMixin from '../mixins/settings';

export default Ember.Component.extend(SettingsMixin, {
  classNames: ['ui', 'form'],
  tagName: 'form',
  moduleName: 'form',
  submit(event) {
    event.preventDefault();
    this.sendAction();
  }
});
