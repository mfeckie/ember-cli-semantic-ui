/* globals QUnit, $ */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-modal', 'Integration | Component | ui modal', {
  integration: true
});

test('it displays modal on clicking trigger element', function(assert) {
  assert.expect(2);
  this.render(hbs`
    {{#ui-modal}}
    <div class="ui button">
      Open Me!
    </div>
    <div class="ui modal">
      <div class="ui header">
        This is a test modal
      </div>
    </div>
    {{/ui-modal}}
  `);
  QUnit.stop();
  this.$('.ui.button').click();
  //This is a bit funky, but we need to deal with transition times, hence the
  // delays...
  Ember.run.later(() => {
    const modal = $('.ui.dimmer.modals.page.transition.visible.active');

    assert.ok(modal.length === 1);

    this.$('.ui.button').click();

    Ember.run.later(() => {
      const modal = $('.ui.dimmer.modals.page.transition.visible.active');

      assert.ok(modal.length === 0);
      QUnit.start();
    }, 700);
  }, 700);
});
