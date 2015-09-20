import Ember from 'ember';
import SettingsMixin from '../mixins/settings';
import layout from '../templates/components/ui-progress';

export default Ember.Component.extend(SettingsMixin, {
  layout: layout,
  classNames: ['ui', 'progress'],
  moduleName: 'progress',
  updateProgress: Ember.observer('progress', function () {
    this.$().progress({
      percent: this.get('progress')
    });
  })
});
