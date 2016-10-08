import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  userProfile: DS.belongsTo('user-profile', {async: true}),
  ngoProfile: DS.belongsTo('ngo-profile', {async: true})
});
