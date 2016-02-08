/* globals QUnit */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-progress', 'Integration | Component | ui progress', {
  integration: true
});

test('It updates the bar width on progress change', function(assert) {
  this.set('progress', 0);

  this.render(hbs`{{ui-progress progress=progress}}`);
  const startWidth = this.$('.bar').width();
  QUnit.stop();
  this.set('progress', 50);
  Ember.run.later(() => {
    const finishWidth = this.$('.bar').width();
    assert.ok(startWidth !== finishWidth);
    QUnit.start();
  }, 100);
});
