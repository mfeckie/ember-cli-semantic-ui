import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-accordion', 'Integration | Component | ui accordion', {
  integration: true
});

test('Renders accordion and sections', function(assert) {

  this.render(hbs`
    {{#ui-accordion}}
      {{#ui-accordion-section}}
        Stuff in the middle
      {{/ui-accordion-section}}
    {{/ui-accordion}}
  `);

  var text = this.$().text().trim();
  assert.equal(text, 'Stuff in the middle');
});

test('Displays contents on click', function(assert) {
  this.render(hbs`
    {{#ui-accordion}}
      {{#ui-accordion-section}}
        Stuff in the middle
      {{/ui-accordion-section}}
    {{/ui-accordion}}
  `);

  assert.equal(this.$('.title').attr('class').trim(), 'title');
  assert.equal(this.$('.content').attr('class').trim(), 'content');

  this.$().find('.title').click();
  assert.equal(this.$('.title').attr('class'), 'title  active');
});

