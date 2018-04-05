export const routing = ($urlRouterProvider, $locationProvider, $stateProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/contacts/list');

    $stateProvider
        .state({
            name: 'list',
            url: '/contacts/list',
            component: 'list'
        })
        .state({
            name: 'add',
            url: '/contacts/add',
            component: 'add'
        })
        .state({
            name: 'edit',
            url: '/contacts/edit/:id',
            component: 'edit'
        })
        .state({
            name: 'details',
            url: '/contacts/details/:id',
            component: 'detail'
        });
}