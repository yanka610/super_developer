

angular.module("myApp", ['ngRoute', 'registration','car','description'])
.config(function($routeProvider) {
    $routeProvider.
        when('/signin', {
            templateUrl: 'template/singin.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo:'/signin'
        })
})

.controller("mainController", function($scope, $http){
   $scope.test="test";

   $scope.addUser = function() {
    $http.get('/test').then(function(result){
        console.log(result);
    });
   }
})
