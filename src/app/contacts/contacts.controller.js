export default class ContactsController {
    constructor($state) {
        this.$state = $state;
    };

    goList = () => {
        this.$state.go('list');
    }

    goAdd = () => {
        this.$state.go('add');
    }
}