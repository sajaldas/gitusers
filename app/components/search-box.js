import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
    },

    actions:{
        handleFilter(){
            let gitApiUrl = "https://api.github.com/users/"+this.get('srchvalu');
            return this.get('ajax').request(gitApiUrl, {
                method: 'GET',
              }).then((response) => {
                this.sendAction('updateList', response);
            });
        }
    }
});
