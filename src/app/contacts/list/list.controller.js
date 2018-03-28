export default class ListController {

    constructor($state, myService) {
        this.$state = $state;
        this.myService = myService;
        this.contacts = myService.contacts;
    };

    edit = (id) => {
        this.$state.go('edit', {
            id: id,
        })
    };

    delete = (id) => {
        this.myService.deleteContact(id);
    };
}
