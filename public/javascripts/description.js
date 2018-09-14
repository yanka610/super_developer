angular.module("description", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/description', {
            templateUrl: 'template/description.html',
            controller: 'descriptionController'
        })
})