angular.module("addrouterApp")
.controller("mainController",function($scope,$compile){
    $scope.nodo={};
    $scope.nodo.protocolos = {};
    $scope.nodo.protocolos.ssh = [];

    $scope.selecting = function (){
     console.log($scope.nodo)   
    }

    $scope.add_ruta_button = function(event){
        var index_ruta  =  $(event.target).data('ruta');
        var ruta    = '<tr class="tr_host_1">\
                            <td rowspan="1" class="rowspan_ruta"><small><strong> Ruta</strong> #1</small>\
                            <td><input class="form-control" ng-model="nodo.protocolos.ssh[0][0].port"></td>\
                            <td><input class="add_salto_button" type="button" value=">" data-ruta="1" data-salto="0"></td>\
                        </tr>';

        $("tbody").append($compile(ruta)($scope));
    }
})