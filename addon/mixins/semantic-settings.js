import Ember from 'ember';

export default Ember.Mixin.create({
  moduleName: null,
  init() {
    this._super();
    Ember.assert('You must set a moduleName string to use this mixin', this.get('moduleName'));
  },
  didInsertElement() {
    const moduleName = this.get('moduleName');
    const semanticConfiguration = this.get('semanticConfiguration');
    if(Ember.$.isPlainObject(semanticConfiguration)) {
      this.$()[moduleName](semanticConfiguration);
    } else {
      this.$()[moduleName]();
    }
    this._super();
  },
  setSemanticConfiguration(settings) {
    this.set('semanticConfiguration', Ember.$.merge(settings, this.getWithDefault('semanticConfiguration', {})));
  },
  willDestroyElement() {
    this.$()[this.get('moduleName')]('destroy');
    this._super();
  }
});
