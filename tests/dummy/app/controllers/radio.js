import Ember from 'ember';
export default Ember.Controller.extend({
  optionCollection: [
    'red',
    'green',
    'blue'
  ],
  checked: 'red'
});
