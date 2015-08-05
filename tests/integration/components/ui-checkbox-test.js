import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-checkbox', 'Integration | Component | ui checkbox', {
  integration: true
});

test('Responds to change events', function(assert) {
  assert.expect(3);
  this.set('isChecked', false);

  this.render(hbs`{{ui-checkbox isChecked=isChecked label="Checkbox"}}`);

  assert.equal(this.$().text().trim(), 'Checkbox');
  assert.equal(this.$('input')[0].checked, false);

  this.set('isChecked', true);

  assert.equal(this.$('input')[0].checked, true);

});
