import Ember from 'ember';
import layout from '../templates/components/ui-sticky';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ui', 'sticky'],
  didInsertElement () {
    if(this.get('targetElement')) {
      this.$().sticky({
        context: this.get('targetElement')
      });
    } else {
      this.$().sticky();
    }
  }
});
