angular.module("addrouterApp")
    .controller("mainController", function ($scope, $compile) {
        $scope.nodo = {};
        $scope.nodo.protocolos = {};
        $scope.nodo.protocolos.ssh = [];
        index_ruta = 0;

        $scope.selecting = function () {
            console.log($scope.nodo)
        }

        $scope.add_ruta_button = function (event) {
            var ruta = '<tr class="tr_host_' + index_ruta + '">\
                            <td rowspan="1" class="rowspan_ruta">\
                                <samp>Ruta: '+ (index_ruta + 1) + '</samp>\
                                <button class="btn btn-danger btn-xs" type="button"  data-ruta='+ index_ruta + ' ng-click="delete_ruta_button($event)" >\
                                    <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>\
                                </button>\
                            </td>\
                            <td><input class="form-control" ng-model="nodo.protocolos.ssh['+ index_ruta + '][0].port"></td>\
                            <td><button class="add_ruta_button btn btn-default btn-xs" type="button" ng-click="add_salto_button($event)" data-salto="0">></button></td>\
                        </tr>';

            $("tbody").append($compile(ruta)($scope));

            index_ruta++;
        }

        $scope.delete_ruta_button = function (event) {
           var array = [] = $scope.nodo.protocolos.ssh;
           if ($(event.target)[0].nodeName == "SPAN") {
                var res = $(event.target).parent().parent().parent()[0].innerText;
                $(event.target).parent().parent().parent().remove();
            } else {
                var res = $(event.target).parent().parent()[0].innerText;
                $(event.target).parent().parent().remove();
           }
           var split = res.split(" ");
           var index_delete = split[1]-1;

           delete array[index_delete];
           //console.log(index_delete);
           //array.splice(index_delete,1);
           //$scope.nodo.protocolos.ssh.sort(function(a,b){
           //    return a-b;
           //});
           //console.log($scope.nodo.protocolos.ssh);
        }

        $scope.add_salto_button = function(event){
            var res = $(event.target).parent().parent()[0].innerText;
            var split = res.split(" ");
            var index_ruta = split[1]-1;
            var index_salto = $(event.target).data("salto");

            var salto      =   '<tr>\
					        	    <td><input class="form-control" ng-model="nodo.protocolos.ssh['+ index_ruta + ']['+index_salto+'].port"></td>\
					        	</tr>';

            $(event.target).parent().parent().after(salto);  
            
            rowantes = $(event.target).parent().parent()[0].firstElementChild.attributes[0].value;
           $(event.target).parent().parent()[0].firstElementChild.attributes[0].value = parseInt(rowantes,10) + 1;

           // $(event.target).data("salto",parseInt(index_salto,10)+1)
        }
    })
