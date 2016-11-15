angular.module('routerApp')
.controller('rutasListController',function($scope){
    $scope.select = function(a){
        console.log(a);
    }
})