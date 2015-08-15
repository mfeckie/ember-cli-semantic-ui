import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-radio-button', 'Integration | Component | ui radio button', {
  integration: true
});

test('Binds values and checked status', function(assert) {
  this.set('value', 'red');
  this.set('checked', 'blue');
  this.set('collectionName', 'testCollection');

  this.render(hbs`{{ui-radio-button value=value checked=checked collectionName=collectionName}}`);

  assert.equal(this.$('input').val().trim(), 'red');

  assert.equal(this.$('input')[0].checked, false);

  this.set('checked', 'red');

  assert.equal(this.$('input')[0].checked, true);
});

test('Triggers actions passed in', function (assert){
  this.set('value', 'red');
  this.set('checked', 'blue');
  this.set('label', 'Red');
  this.set('collectionName', 'testCollection');

  this.render(hbs`{{ui-radio-button value=value
    label=label
    checked=checked
    collectionName=collectionName
    checkOption='checkOption'
  }}`);
  assert.ok(!this.$('input')[0].checked);
  this.$('input').click();
  assert.ok(this.$('input')[0].checked);
});
