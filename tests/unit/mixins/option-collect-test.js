import Ember from 'ember';
import OptionCollectMixin from 'ember-cli-semantic-ui/mixins/option-collect';
import { module, test } from 'qunit';

module('Unit | Mixin | option collect');

test('it works when mixed into an object with correct properties', function(assert) {
  var OptionCollectObject = Ember.Object.extend(OptionCollectMixin, {
    availableOptions: []
  });
  var subject = OptionCollectObject.create();
  assert.ok(subject);
});

test('it returns an options object', function (assert) {
  var OptionCollectObject = Ember.Object.extend(OptionCollectMixin, {
    availableOptions: ['potion', 'character'],
    potion: 'polyjuice',
    character: 'hermione'
  });
  var subject = OptionCollectObject.create();
  var options = subject.collectOptions();
  assert.deepEqual(options, {
    potion: 'polyjuice',
    character: 'hermione'
  });
});
