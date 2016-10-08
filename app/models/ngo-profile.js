import DS from 'ember-data';


export default DS.Model.extend({
  title: DS.attr('string'),
  requests: DS.hasMany('request', {async: true})
});
