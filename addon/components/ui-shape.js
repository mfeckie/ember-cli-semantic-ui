import Ember from 'ember';
import layout from '../templates/components/ui-shape';
import OptionCollect from 'ember-cli-semantic-ui/mixins/option-collect';

export default Ember.Component.extend(OptionCollect, {
  layout: layout,
  availableOptions: ['duration'],
  didInsertElement () {
    const shapeElement = this.$('.ui.shape');
    const options = this.collectOptions();

    shapeElement.shape(options);
    this.set('shapeElement', shapeElement);
  },
  actions: {
    changeSide () {
      const transitionType = this.get('transitionType') || 'flip up';
      Ember.$(this.get('shapeElement')).shape(transitionType);
    }
  }
});
