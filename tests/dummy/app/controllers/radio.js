import Ember from 'ember';
export default Ember.Controller.extend({
  namedCollection: [
    {color: 'red', rgb: '#FF0000'},
    {color: 'green', rgb: '#00FF00'},
    {color: 'blue', rgb: '#0000FF'}
  ],
  checked: '#FF0000'
});
