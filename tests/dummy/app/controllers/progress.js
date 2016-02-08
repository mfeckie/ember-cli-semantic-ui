import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    changeProgress () {
      const min = 1;
      const max = 100;
      const progress =  Math.floor(Math.random() * (max - min + 1)) + min;
      this.set('progressPercent', progress);
    }
  }
});
