/* globals QUnit */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-popup', 'Integration | Component | ui popup', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
    {{#ui-popup}}
      template block text
    {{/ui-popup}}
  `);
  // TODO - Need to find a way to trigger and test the hover event
  assert.equal(this.$().text().trim(), 'template block text');
});

test('It displays popup on hover', function (assert){
  this.render(hbs`
    {{#ui-popup content='Test popup'}}
      template block text
    {{/ui-popup}}
  `);
  QUnit.stop();
  this.$('span').triggerHandler('mouseover');
  Ember.run.later(() => {
    QUnit.start();
    var popup = Ember.$('.ui.popup.top.left.transition.visible');
    assert.ok(popup.length === 1);
    this.$('span').triggerHandler('mouseout');
  }, 300);
});
