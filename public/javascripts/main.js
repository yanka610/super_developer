angular.module("main", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'template/main.html',
            controller: 'mainController'
        })
       
})

.controller("mainController", function($scope, $http){
 
})
