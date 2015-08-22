/* globals QUnit */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-shape', 'Integration | Component | ui shape', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#ui-shape buttonLabel='testLabel'}}
    {{/ui-shape}}
  `);
  assert.equal(this.$().text().trim(), 'testLabel');
});

test('It flips', function (assert){
  assert.expect(2);
  this.render(hbs`
    {{#ui-shape buttonLabel='testLabel'}}
      <div class="ui shape square">
        <div class="sides">
          <div class="side active">The active side</div>
          <div class="side">The second side</div>
        </div>
      </div>
    {{/ui-shape}}
  `);
  assert.equal(this.$('.side').first().attr('class'), 'side active');
  this.$('.ui.button').click();
  QUnit.stop();

  Ember.run.later(()=> {
    QUnit.start();
    assert.equal(this.$('.side').last().attr('class'), 'side active');
  }, 700);

});

test('It can have a shorter duration', function (assert){
  assert.expect(2);
  this.render(hbs`
    {{#ui-shape buttonLabel='testLabel' duration=10 }}
      <div class="ui shape square">
        <div class="sides">
          <div class="side active">The active side</div>
          <div class="side">The second side</div>
        </div>
      </div>
    {{/ui-shape}}
  `);
  assert.equal(this.$('.side').first().attr('class'), 'side active');
  this.$('.ui.button').click();
  QUnit.stop();

  Ember.run.later(()=> {
    QUnit.start();
    assert.equal(this.$('.side').last().attr('class'), 'side active');
  }, 50);

});
