angular.module("car", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/car', {
            templateUrl: 'template/car.html',
            controller: 'carController'
        })
})