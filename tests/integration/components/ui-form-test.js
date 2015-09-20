/* globals QUnit */
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ui-form', 'Integration | Component | ui form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-form}}
      template block text
    {{/ui-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it work if settings defined', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('settings', {
        inline: true,
        on: 'blur',
        fields: {
          firstName: 'empty',
          lastName: 'empty'
        }
    });

  this.render(hbs`
    {{#ui-form action='save' settings=settings}}
      <div class="field">
        <label>First Name</label>
        {{input type='text' name='firstName' placeholder="First Name" value=firstName}}
      </div>
      <div class="field">
        <label>Last Name</label>
        {{input type='text' name='lastName' placeholder="Last Name"}}
      </div>
      {{input type='submit' value='Join' class='ui button'}}
    {{/ui-form}}
    `);
  QUnit.stop();
  var element = this.$().find('.button');
  element.click();
  Ember.run.later(() => {
    assert.equal(Ember.$('.ui.form').find("[name=firstName]").parent().find('.label.visible').text(), 'First Name must have a value');
    assert.equal(Ember.$('.ui.form').find("[name=lastName]").parent().find('.label.visible').text(), 'Last Name must have a value');
    QUnit.start();
  }, 300);
});
