import Ember from 'ember';

export default Ember.Mixin.create({
  init () {
    Ember.assert('You must set an availableOptions arrary to use this mixin', this.get('availableOptions'));
    this._super();
  },
  collectOptions () {
    return this.get('availableOptions').reduce((options, option) => {
      if(this.get(option)) {
        options[option] = this.get(option);
        return options;
      }
      return options;
    }, {});
  }
});
