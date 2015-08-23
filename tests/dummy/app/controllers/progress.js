import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeProgress () {
      var min = 1;
      var max = 100;
      var progress =  Math.floor(Math.random() * (max - min + 1)) + min;
      this.set('progressPercent', progress);
    }
  }
});
