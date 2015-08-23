import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-dropdown', 'Integration | Component | ui dropdown', {
  integration: true
});

test('it dropdown and responds to change events', function(assert) {
  assert.expect(2);
  this.set('selected', 'red');
  // Template block usage:
  this.render(hbs`
    {{#ui-dropdown selected=selected}}
      <div class="defaul text">Pick a color....</div>
      <i class="dropdown icon"></i>
      <div class="menu">
        <div data-value="red" class="item">Red</div>
        <div data-value="green" class="item">
          <span data-value="blue" class="description">ctrl + g</span>
          Green
        </div>
        <div class="item">
          Blue
        </div>
      </div>
    {{/ui-dropdown}}
  `);

  assert.equal(this.get('selected'), 'red');
  Ember.run(() => {
    this.$('.item:contains("Blue")').click();
    assert.equal(this.get('selected'), 'blue');
  });
});
