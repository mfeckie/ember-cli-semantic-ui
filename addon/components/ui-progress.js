import Ember from 'ember';
import layout from '../templates/components/ui-progress';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  layout: layout,
  classNames: ['ui', 'progress'],
  moduleName: 'progress',
  updateProgress: Ember.observer('progress', function () {
    this.$().progress({
      percent: this.get('progress')
    });
  })
});
