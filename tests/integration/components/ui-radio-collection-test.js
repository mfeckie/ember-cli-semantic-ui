import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-radio-collection', 'Integration | Component | ui radio collection', {
  integration: true
});

var optionCollection = ['red', 'green', 'blue'];

test('it renders', function(assert) {
  this.set('optionCollection', optionCollection);

  this.render(hbs`{{ui-radio-collection optionCollection=optionCollection}}`);

  assert.equal(this.$('label').first().text().trim(), 'red');

});
