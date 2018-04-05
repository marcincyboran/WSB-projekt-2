export default class DetailsController {

    constructor ($state, myService, $stateParams) {
        this.$state = $state;
        this.myService = myService;
        this.$stateParams = $stateParams;
    }

    back = () => {
        this.$state.go('list');
    }

    edit = () => {
        this.$state.go('edit', {
            id: this.$stateParams.id
        })
    }
}