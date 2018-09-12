

angular.module("myApp", [])

.controller("mainController", function($scope, $http){
   $scope.test="test";

   $scope.addUser = function() {
    $http.get('/user',  { 'message' : 'ffffff' }).then(function(result){
        console.log(result);
    });
   }
})
