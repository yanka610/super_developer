

angular.module("myApp", ['ngRoute', 'main','car','description','addClient'])
.config(function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'template/login.html',
            controller: 'loginController'
        })
        .when('/signin', {
            templateUrl: 'template/signin.html',
            controller: 'signinController'
        })
       
        // .otherwise({
        //     redirectTo:'/login'
        // })
})

.controller('loginController', function($rootScope, $scope, $http){
    $scope.data = {};

    $scope.logIn = function() {
        $http.post('/login', $scope.data).then(function(result){
            if (result) {
               window.location.href='#!/main';
            }
         });    
    }
})

.controller("signinController", function($rootScope, $scope, $http){
   $scope.form = false;
   $scope.userData = {};

   $scope.aa=function(){
    console.log($scope.userData);
}
   $scope.signInForm = function() {
        $scope.form = true;
        setTimeout(function(){}, 2000);
   }


   $scope.addUser = function() {
      
    $http.post('/user', $scope.userData).then(function(result){
        console.log(result);
    });
       
   }

   $scope.getUser = function() {
    $http.get('/user', $scope.userData).then(function(result){
        console.log(result);
    });
   }
})
