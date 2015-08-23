import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-dimmable', 'Integration | Component | ui dimmable', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`
    {{#ui-dimmable}}
      template block text
    {{/ui-dimmable}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it dims', function(assert) {

  this.render(hbs`
    {{#ui-dimmable}}
      template block text
    {{/ui-dimmable}}
  `);
  var element = this.$().find('.ui.dimmable');
  var beforeClass = element.attr('class');
  assert.equal(beforeClass, 'ember-view ui dimmable');
  element.click();
  var afterClass = element.attr('class');
  assert.equal(afterClass, 'ember-view ui dimmable dimmed');

});


test('it dims specific element', function(assert) {

  this.render(hbs`
    {{#ui-dimmable targetElement='#dimMe'}}
      This should not be dimmed
      <div id="dimMe" class="ui dimmable">
        This should be dimmed!
      </div>
    {{/ui-dimmable}}
  `);
  var dimmable = this.$().find('#dimMe');

  assert.equal(dimmable.attr('class'), 'ui dimmable');
  this.$().find('#dimMe').click();
  assert.equal(this.$().find('#dimMe').attr('class'), 'ui dimmable dimmed');

});
