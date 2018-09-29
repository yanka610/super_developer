angular.module("addClient", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider.
        when('/addClient', {
            templateUrl: 'template/addClient.html',
            controller: 'addClientController'
        })
})

.controller('addClientController', function($rootScope, $scope, $http){
      $scope.clientData = {};
$scope.addClient = function() {

    $http.post('/client', $scope.clientData).then(function(result){
        console.log(result);
    });
       
   }
})
