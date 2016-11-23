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
                                <samp>Ruta: '+(index_ruta+1)+'</samp>\
                                <button class="btn btn-danger btn-xs" type="button"  data-ruta='+index_ruta+' ng-click="delete_ruta_button($event)" >\
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
                                </button>\
                            </td>\
                            <td><input class="form-control" ng-model="nodo.protocolos.ssh['+index_ruta+'][0].port"></td>\
                            <td><input class="add_salto_button" type="button" value=">" data-ruta="1" data-salto="0"></td>\
                        </tr>';

        $("tbody").append($compile(ruta)($scope));

        index_ruta ++;
    }

    $scope.delete_ruta_button = function(event){
        $(event.target).parent().parent().remove();
    }
})