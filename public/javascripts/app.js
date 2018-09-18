

angular.module("myApp", ['ngRoute', 'main','car','description'])
.config(function($routeProvider) {
    $routeProvider.
        when('/signin', {
            templateUrl: 'template/signin.html',
            controller: 'signinController'
        })
        .otherwise({
            redirectTo:'/signin'
        })
})

.controller("signinController", function($rootScope, $scope, $http){
   $scope.registrationForm = false;
   $scope.userData = {};


   $scope.signInForm = function() {
        $scope.registrationForm = true;
       
   }




   $scope.addUser = function() {
    $http.post('/user', $scope.userData).then(function(result){
        console.log(result);
    });
   }

   $scope.getUser = function() {
    $http({
        method: 'GET',
        url: '/getUser'}).then(function(result){
        console.log(result);
    });
   }
})
