import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-radio-collection', 'Integration | Component | ui radio collection', {
  integration: true
});

test('renders named pairs', function (assert){
  const namedPair = [
    {color: 'white', rgb: '#FFF'},
    {color: 'blue', rgb: '#000'}
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

  this.$('input:last').click();

  assert.equal(this.$('input:last')[0].checked, true);
});
