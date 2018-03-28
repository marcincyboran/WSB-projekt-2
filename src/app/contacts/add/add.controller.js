export default class AddController {

    name = '';
    phone = '';

    constructor ($state, myService) {
        this.$state = $state;
        this.myService = myService;
    }

    add = () => {
        this.myService.addContact(this.name,this.phone);
        this.$state.go('list');
    }

    goBack = () => {
        this.$state.go('list');
    }

    clear = () => {
        this.name = '';
        this.phone = '';
    }
}