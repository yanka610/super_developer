angular.module("car", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/addClient', {
            templateUrl: 'template/addClient.html',
            controller: 'carController'
        })
})

.controller("carController", function($rootScope, $scope, $http){
    
    $scope.carData = {}; 
    $scope.addCar = function() {      
     $http.post('/client', $scope.carData).then(function(result){
         console.log(result);
     });
        
    }

 })