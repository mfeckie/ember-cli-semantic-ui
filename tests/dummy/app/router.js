import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('checkbox');
  this.route('radio');
  this.route('accordion');
  this.route('popup');
  this.route('dimmer');
  this.route('shape');
  this.route('dropdown');
  this.route('modal');
  this.route('sticky');
  this.route('progress');
  this.route('form');
});

export default Router;
