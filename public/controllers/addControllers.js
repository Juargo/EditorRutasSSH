angular.module("addrouterApp")
.controller("mainController",function($scope){
    $scope.nodo={};
    $scope.nodo.protocolos = {};
    $scope.nodo.protocolos.ssh = [];
    $scope.selecting = function (){
     console.log($scope.nodo)   
    }
})