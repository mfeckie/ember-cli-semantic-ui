import Ember from 'ember';
import layout from '../templates/components/ui-shape';
import OptionCollect from 'ember-cli-semantic-ui/mixins/option-collect';

export default Ember.Component.extend(OptionCollect, {
  layout: layout,
  availableOptions: ['duration'],
  didInsertElement () {
    var shapeElement = this.$('.ui.shape');
    var options = this.collectOptions();

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
