import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeArrayResponse: function (store, primaryType, payload) {        
        // console.log(payload);      
         payload={users: payload}
         return this._super(store, primaryType, payload);
     },
});
