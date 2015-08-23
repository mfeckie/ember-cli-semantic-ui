import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-progress', 'Integration | Component | ui progress', {
  integration: true
});

test('It updates the progess width on progress change', function(assert) {
  assert.expect(2);
  this.set('progress', 0);

  this.render(hbs`{{ui-progress progress=progress}}`);

  assert.equal(this.$('.progress').last().width(), 0);

  this.set('progress', 50);

  assert.ok(this.$('.progress').last().width() > 0);
});
