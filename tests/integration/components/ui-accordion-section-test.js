import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-accordion-section', 'Integration | Component | ui accordion section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.set('title', 'My Accordion');

  // Template block usage:
  this.render(hbs`
    {{#ui-accordion-section title=title}}
      template block text
    {{/ui-accordion-section}}
  `);

  assert.equal(this.$('.title').text().trim(), 'My Accordion');
  assert.equal(this.$('.content').text().trim(), 'template block text');
});
