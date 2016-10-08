import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('requests');
  this.route('user-profiles');
  this.route('ngo-profiles', {path: '/'});
});

export default Router;
