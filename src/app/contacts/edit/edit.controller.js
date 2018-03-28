import AddController from '../add/add.controller';

export default class EditController extends AddController {
    constructor(myService, $state, $stateParams, $scope) {
        super($state, myService)
        this.$stateParams = $stateParams;
        this.$scope = $scope;
        // this.myService = myService;
        // this.$state = $state;
        // this.name = '';
        // this.phone = '';
    }

    $onInit() {
        this.id = this.$stateParams.id;
        const contacts = this.myService.contacts;
        console.log(this.myService);
        this.index = contacts.map(contact => contact.id).indexOf(this.id);
        this.backup = contacts[this.index];
        this.name = contacts[this.index].name;
        this.phone = contacts[this.index].phone;
    }

    edit = () => {
        this.myService.contacts[this.index].name = this.name;
        this.myService.contacts[this.index].phone = this.phone;
        this.myService.setData();
        this.$state.go('list');
    }

    reset = () => {
        this.name = this.backup.name;
        this.phone = this.backup.phone;
    }

    goList = () => {
        this.$state.go('list');
    }
}