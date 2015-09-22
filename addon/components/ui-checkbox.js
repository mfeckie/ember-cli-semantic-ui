import Ember from 'ember';
import layout from '../templates/components/ui-checkbox';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  classNames: ['ui', 'checkbox'],
  moduleName: 'checkbox',
  init: function () {
    this.set('inputId', Ember.generateGuid());
    this._super();
  },
  layout: layout,
  actions: {
    check() {
      this.toggleProperty('isChecked');
    }
  }
});
