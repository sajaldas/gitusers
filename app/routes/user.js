import Route from '@ember/routing/route';

let gitApiUrl = "https://api.github.com/users/";

export default Route.extend({
    ajax: Ember.inject.service('ajax'),
    model: function (params) {        
        return this.get('ajax').request(gitApiUrl + params.user_id, {
            method: 'GET',
            //data: { },
          }).then((response) => {          
            return response;
        });
    },
    
    actions:{
        goBack: function(){
          window.history.back();
        }
    }  
});
