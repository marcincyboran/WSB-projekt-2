import AddController from '../add/add.controller';

export default class EditController extends AddController {
    constructor(myService, $state, $stateParams, $scope) {
        super($state, myService)
        this.$stateParams = $stateParams;
        this.$scope = $scope;
    }

    $onInit() {
        this.id = this.$stateParams.id;
        // console.log(this.id)
        const contacts = this.myService.contacts;
        // console.log(this.myService);
        this.index = contacts.map(contact => contact.id).indexOf(this.id);

        this.backup = contacts[this.index];
        this.name = contacts[this.index].name;
        this.phone = contacts[this.index].phone;
        this.company = contacts[this.index].company;
        this.email = contacts[this.index].email;
        this.date = contacts[this.index].date;
    }

    edit = () => {
        this.myService.contacts[this.index].name = this.name;
        this.myService.contacts[this.index].phone = this.phone;
        this.myService.contacts[this.index].email = this.email;
        this.myService.contacts[this.index].company = this.company;
        this.myService.setData();
        this.$state.go('list');
    }

    reset = () => {
        this.name = this.backup.name;
        this.phone = this.backup.phone;
        this.email = this.backup.email;
        this.company = this.backup.company;
    }

    goList = () => {
        this.$state.go('list');
    }
}