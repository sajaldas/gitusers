import DS from 'ember-data';

export default DS.Model.extend({
    login: DS.attr('string'),	
    avatar_url: DS.attr('string'),
    type: DS.attr('string'),
});
