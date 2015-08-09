import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-radio-collection', 'Integration | Component | ui radio collection', {
  integration: true
});

var optionCollection = ['red', 'green', 'blue'];

test('it renders plain options', function(assert) {
  this.set('optionCollection', optionCollection);

  this.render(hbs`{{ui-radio-collection optionCollection=optionCollection}}`);

  assert.equal(this.$('label').first().text().trim(), 'red');

});

test('renders named pairs', function (assert){
  var namedPair = [
    {color: 'white', rgb: '#FFF'}
  ];

  this.set('optionCollection', namedPair);
  this.set('label', 'color');
  this.set('value', 'rgb');

  this.render(hbs`{{ui-radio-collection
    optionCollection=optionCollection
    label='color'
    value='rgb'
  }}`);
  assert.equal(this.$('label').first().text().trim(), 'white');
  assert.equal(this.$('input').first().val(), '#FFF');
});