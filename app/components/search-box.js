import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
    },

    actions:{
        handleFilter(){
            let filterInputValue = this.get('value');
            console.log('filterInputValue = ', filterInputValue);
        }
    }
});
