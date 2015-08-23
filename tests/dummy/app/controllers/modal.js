import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    noRemove () {
      this.set('actionTriggered', "Don't archive messages");
    },
    remove () {
      this.set('actionTriggered', "Archive messages");
    }
  }
});
