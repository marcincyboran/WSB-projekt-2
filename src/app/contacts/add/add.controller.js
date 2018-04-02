export default class AddController {

    name = '';
    phone = '';
    company = '';
    email = '';

    constructor ($state, myService) {
        this.$state = $state;
        this.myService = myService;
    }

    add = () => {
        this.myService.addContact(
            this.name,
            this.phone,
            this.company,
            this.email
        );
        this.$state.go('list');
    }

    goBack = () => {
        this.$state.go('list');
    }

    clear = () => {
        this.name = '';
        this.phone = '';
        this.company = '';
        this.email = '';
    }
}