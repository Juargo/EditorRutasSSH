angular.module('routerApp')
.constant('dataUrl','http://localhost:3000/api/rutas')
.controller('mainCtrl', function($scope,$http,dataUrl){
    $scope.data={};
    $http.get(dataUrl)
    .success(function(data){
        $scope.data.accesos = data;
    })
    .error(function(error){
        $scope.data.error = error;
    })
})