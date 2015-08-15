import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'accordion'],
  action: 'accordionToggle',
  actions: {
    accordionToggle: function (elements) {
      if(elements.hasClass('active')) {
        return elements.removeClass('active');
      }
      this.$('.title, .content').removeClass('active');
      elements.addClass('active');
    }
  }
});
