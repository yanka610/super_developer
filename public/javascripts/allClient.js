angular.module("allClient", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/allClient', {
            templateUrl: 'template/allClient.html',
            controller: 'clientsController'
        })
})