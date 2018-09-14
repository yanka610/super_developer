angular.module("registration", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/registration', {
            templateUrl: 'template/registration.html',
            controller: 'registrationController'
        })
})

.controller("registrationController", function($scope, $http){
    $scope.test="This is veeeery good message";
})