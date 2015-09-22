import Ember from 'ember';
import SemanticSettings from '../mixins/semantic-settings';

export default Ember.Component.extend(SemanticSettings, {
  classNames: ['ui', 'accordion'],
  moduleName: 'accordion'
});
