import Ember from 'ember';
import layout from '../templates/components/ui-dropdown';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  layout: layout,
  classNames: ['ui', 'dropdown'],
  moduleName: 'dropdown',
  didInsertElement () {
    const component = this;
    const selected = this.get('selected');
    this.setSemanticConfiguration({
      onChange (value) {
        component.set('selected', value);
      },
      fullTextSearch: this.get('fullTextSearch') || false
    });
    this.$().dropdown('set selected', selected);
    this._super();
  }
});
