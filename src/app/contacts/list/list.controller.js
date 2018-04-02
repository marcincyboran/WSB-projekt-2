export default class ListController {

    constructor($state, myService) {
        this.$state = $state;
        this.myService = myService;
        this.myService.getList();
        this.contacts = this.myService.contacts;

    };

    edit = (id) => {
        this.$state.go('edit', {
            id,
        })
    };

    details = (id) => {
        this.myService.getCustomerFromId(id);
        this.$state.go('details', {
            id,
        });
    };

    delete = (id) => {
        this.myService.deleteContact(id);
    };
}
