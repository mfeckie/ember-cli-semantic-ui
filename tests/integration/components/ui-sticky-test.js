import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-sticky', 'Integration | Component | ui sticky', {
  integration: true
});

test('it applies element level styling to the sticky', function(assert) {

  this.render(hbs`
    <div class="ui left rail">
      {{#ui-sticky}}
        <div id='test-btn' class="ui button">Test Button</div>
      {{/ui-sticky}}
    </div>
  `);
  assert.ok(Ember.$('.ember-view.ui.sticky')[0].style.width, 'Width should be set on the element style attribute');
});
