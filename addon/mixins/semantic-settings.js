import Ember from 'ember';

export default Ember.Mixin.create({
  moduleName: null,
  init() {
    this._super();
    Ember.assert('You must set a moduleName string to use this mixin', this.get('moduleName'));
  },
  didInsertElement() {
    var moduleName = this.get('moduleName');
    this._super();
    var semanticConfiguration = this.get('semanticConfiguration');
    if(Ember.$.isPlainObject(semanticConfiguration)) {
      this.$()[moduleName](semanticConfiguration);
    } else {
      this.$()[moduleName]();
    }
  },
  setSemanticConfiguration(settings) {
    this.set('semanticConfiguration', Ember.$.merge(settings, this.getWithDefault('semanticConfiguration', {})));
  },
  willDestroyElement() {
    console.log('willDestroyElement');
    this.$()[this.get('moduleName')]('destroy');
    this._super();
  }
});
