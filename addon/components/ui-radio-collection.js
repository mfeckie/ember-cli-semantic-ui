import Ember from 'ember';
import layout from '../templates/components/ui-radio-collection';

export default Ember.Component.extend({
  layout: layout,
  options: Ember.computed('optionCollection', function(){
    var optionCollection = this.get('optionCollection');
    if(Ember.isArray(optionCollection)) {
      return optionCollection.map(function(item) {
        return {
          value: item,
          label: item,
          id: Ember.generateGuid()
        };
      });
    }
  }),
  collectionName: 'radioOptions'
});
