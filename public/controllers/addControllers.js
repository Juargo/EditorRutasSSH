angular.module("addrouterApp")
.controller("mainController",function($scope,$compile){
    $scope.nodo={};
    $scope.nodo.protocolos = {};
    $scope.nodo.protocolos.ssh = [];
    index_ruta=0;

    $scope.selecting = function (){
     console.log($scope.nodo)   
    }

    $scope.add_ruta_button = function(event){
        var ruta    = '<tr class="tr_host_'+index_ruta+'">\
                            <td rowspan="1" class="rowspan_ruta">\
                                <small><strong> Ruta</strong> #'+(index_ruta+1)+'</small>\
                                <button class="delete_ruta_button btn btn-danger btn-xs" type="button"  data-ruta='+index_ruta+' >\
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
                                </button>\
                            </td>\
                            <td><input class="form-control" ng-model="nodo.protocolos.ssh[0][0].port"></td>\
                            <td><input class="add_salto_button" type="button" value=">" data-ruta="1" data-salto="0"></td>\
                        </tr>';

        $("tbody").append($compile(ruta)($scope));

        index_ruta ++;
    }
})