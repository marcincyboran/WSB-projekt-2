export default class DetailsController {

    constructor ($state, myService, $stateParams, $scope) {
        this.$state = $state;
        this.myService = myService;
        this.$stateParams = $stateParams;
        this.$scope = $scope;
    }

    $onInit = () => {
        this.id = this.$stateParams.id;
        this.test = this.myService.test;
        this.myService.getCustomerFromId(this.id);

        this.customer = this.myService.customerDetails;
        console.log(this.customer);
        this.xyz = 'asdasd';
    }



}