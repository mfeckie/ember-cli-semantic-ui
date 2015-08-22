import Ember from 'ember';
import layout from '../templates/components/ui-shape';

export default Ember.Component.extend({
  layout: layout,
  didInsertElement () {
    var shapeElement = this.$('.ui.shape');
    var options = {};
    if(this.get('duration')) {
      options.duration = this.get('duration');
    }
    shapeElement.shape(options);
    this.set('shapeElement', shapeElement);
  },
  actions: {
    changeSide () {
      var transitionType = this.get('transitionType') || 'flip up';
      Ember.$(this.get('shapeElement')).shape(transitionType);
    }
  }
});
