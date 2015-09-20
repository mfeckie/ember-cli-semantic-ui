import Ember from 'ember';

export default Ember.Controller.extend({
  settings: {
      inline: true,
      fields: {
        firstName: 'empty',
        lastName: 'empty'
      }
  },
  actions: {
    save(){
      this.set('onSubmit', true);
    }
  }
});
