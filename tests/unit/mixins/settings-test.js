import Ember from 'ember';
import SettingsMixin from 'ember-cli-semantic-ui/mixins/settings';
import { module, test } from 'qunit';

module('Unit | Mixin | settings');

test('it works when "moduleName" defined', function(assert) {
  var SettingsObject = Ember.Object.extend(SettingsMixin);
  var subject = SettingsObject.create({moduleName: 'testModule'});
  assert.ok(subject);
});

test('it works when "moduleName" is not defined', function(assert) {
  var SettingsObject = Ember.Object.extend(SettingsMixin);
  assert.throws(
    function(){
      SettingsObject.create();
    },
    'moduleName is required and must be string'
  );
});
