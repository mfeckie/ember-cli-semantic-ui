import Ember from 'ember';
import SemanticSettingsMixin from 'ember-cli-semantic-ui/mixins/semantic-settings';
import { module, test } from 'qunit';

module('Unit | Mixin | settings');

test('it works when "moduleName" defined', function(assert) {
  const SettingsObject = Ember.Object.extend(SemanticSettingsMixin);
  const subject = SettingsObject.create({moduleName: 'testModule'});
  assert.ok(subject);
});

test('it works when "moduleName" is not defined', function(assert) {
  const SettingsObject = Ember.Object.extend(SemanticSettingsMixin);
  assert.throws(
    function(){
      SettingsObject.create();
    },
    'moduleName is required and must be string'
  );
});
