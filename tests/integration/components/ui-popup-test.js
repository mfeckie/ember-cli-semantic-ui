import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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
