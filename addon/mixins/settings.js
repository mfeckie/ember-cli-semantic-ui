import Ember from 'ember';

export default Ember.Mixin.create({
  moduleName: null,
  init() {
    this._super();
    var moduleName = this.get('moduleName');
    if(Ember.$.type(moduleName) !== "string") {
        throw new Ember.Error('moduleName is required and must be string');
    }
  },
  didInsertElement() {
    var moduleName = this.get('moduleName');
    this._super();
    var settings = this.get('settings');
    if(Ember.$.isPlainObject(settings)) {
      this.$()[moduleName](settings);
    } else {
      this.$()[moduleName]();
    }
  },
  setSettings(settings) {
    this.set('settings', Ember.$.merge(settings, this.get('settings') || {}));
  }
});
