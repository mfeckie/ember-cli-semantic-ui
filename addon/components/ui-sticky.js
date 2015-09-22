import Ember from 'ember';
import layout from '../templates/components/ui-sticky';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  layout: layout,
  classNames: ['ui', 'sticky'],
  moduleName: 'sticky',
  didInsertElement () {
    if(this.get('targetElement')) {
      this.setSemanticConfiguration({
        context: this.get('targetElement')
      });
    }
    this._super();
  }
});
