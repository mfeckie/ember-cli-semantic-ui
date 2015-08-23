import Ember from 'ember';
import layout from '../templates/components/ui-progress';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ui', 'progress'],
  didInsertElement () {
    this.$().progress();
  },
  updateProgress: Ember.observer('progress', function () {
    this.$().progress({
      percent: this.get('progress')
    });
  })
});
