import Ember from 'ember';
import layout from '../templates/components/ui-radio-collection';

export default Ember.Component.extend({
  layout: layout,
  options: Ember.computed('optionCollection', function () {
    const optionCollection = this.get('optionCollection');
    const label = this.get('label');
    const value = this.get('value');
    return optionCollection.map(item => {
      return {
        value: item[value],
        label: item[label],
        id: Ember.generateGuid()
      };
    });
  }),
  collectionName: 'radioOptions',
  actions: {
    checkOption (option) {
      this.set('checked', option);
    }
  }
});
