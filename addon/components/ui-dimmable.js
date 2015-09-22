import Ember from 'ember';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  classNames: ['ui', 'dimmable'],
  moduleName: 'dimmer',
  click() {
    if(this.get('targetElement')) {
      return this.$(this.get('targetElement')).dimmer('toggle');
    }
    this.$().dimmer('toggle');
  }
});
