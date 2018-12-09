import Route from '@ember/routing/route';
//import { inject as service } from '@ember/service';

let ide=1;
export default Route.extend({    
    //list: Ember.inject.service('shortlist'),

    model() {
        let users=this.store.findAll('user');        
        //console.log('users = ', users);
        return users;
    },

    setupController(controller,model){
        this._super(...arguments); 
        
        let list = JSON.parse(localStorage.getItem('shortList'));        
        let shortList=[];
        if(!!list) {            
            for (var i=0; i< list.length; i++) {               
                shortList.push(list[i][0]);
            }
        }              
        controller.set('shortList', shortList);
    },

    actions:{
        shortlist(user){            
            const userData=user.get('data');
            let newUser={loginId: userData.login, imagrUrl: userData.avatar_url, userType: userData.type};                        
            let list = JSON.parse(localStorage.getItem('shortList'));
            //console.log('list = ', list);            

            if(!list) {
                this.send("addToShortlist", list, newUser);
            }
            else {
                let exists=0;
                for (var i=0; i< list.length; i++) {                    
                    if(list[i][0].loginId == newUser.loginId){
                        exists++;
                        break;                    
                    }
                }
                if(exists==0)
                this.send("addToShortlist", list, newUser);   
            }         
        },

        addToShortlist(list, newUser){
            if(!list) list=[];
            list.push([newUser]);
            localStorage.setItem('shortList', JSON.stringify(list));
        },

        removeFromList(loginId){           
            let list = JSON.parse(localStorage.getItem('shortList'));
            if(!!list) {
                let index=0;
                for (var i=0; i< list.length; i++) {
                    if(list[i][0].loginId == loginId){
                        index=i;
                        break;                    
                    }  
                }
                if(index>0)
                {
                    list.splice(index, 1);
                    localStorage.setItem('shortList', JSON.stringify(list));
                }
            }
        },

        // addToShortList2(user){
        //     //console.log('user = ', user);
        //     const userData=user.get('data');

        //     this.store.push({
        //         data: [{
        //           id: user.id,
        //           type: 'shortlist',
        //           attributes: {
        //             login: userData.login,
        //             avatar_url: userData.avatar_url,
        //             type: userData.type
        //           }
        //         }]
        //     });            
        // },

        // addToShortList3(user){            
        //     this.get('list').add(user);
        // },

        // removeFromList2(userid){
        //     this.store.findRecord('shortlist', 1).then(function(item) {
        //         item.unloadRecord();               
        //     });
        // },

        handleFilter(){
            let filterInputValue = this.get('filtervalue');
            console.log('filterInputValue = ', filterInputValue);
        }
        
    }
});
