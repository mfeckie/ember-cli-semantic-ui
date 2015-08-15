import Ember from 'ember';
import layout from '../templates/components/ui-popup';

export default Ember.Component.extend({
  tagName: 'span',
  layout: layout,
  didInsertElement: function () {
    var popupOptions = {};
    if(this.get('popupContent')) {
      popupOptions.content = this.get('popupContent');
    }
    if(this.get('title')) {
      popupOptions.title = this.get('title');
    }
    if(this.get('popupTarget')) {
      popupOptions.popup = this.get('popupTarget');
    }
    if(this.get('position')) {
      popupOptions.position = this.get('position');
    }
    if(this.get('transition')) {
      popupOptions.transition = this.get('transition');
    }
    this.$().popup(popupOptions);
  }
});
