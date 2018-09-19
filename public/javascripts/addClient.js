angular.module("addClient", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/addClient', {
            templateUrl: 'template/addClient.html',
            controller: 'addClientController'
        })
})