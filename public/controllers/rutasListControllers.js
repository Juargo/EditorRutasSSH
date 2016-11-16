angular.module("routerApp")
    .constant("operadoraActiveClass","btn-primary")
    .controller("rutasListController", function ($scope,operadoraActiveClass) {
        var selectedOperadora = null;
        var selectedNodo = null;
        var selectedProtocol = null;

        $scope.selectOperadora = function (newOperadora) {
            selectedOperadora = newOperadora;
        }
        $scope.getOperadoraClass = function (operadora) {
            return selectedOperadora == operadora ? operadoraActiveClass : "";
        }

        $scope.operadoraFilterFn = function (ruta) {
            return selectedOperadora == null || ruta.operadora == selectedOperadora;
        }

        $scope.selectNodo = function(newNodo){
            selectedNodo = newNodo;
        }

        $scope.getNodoClass = function(Nodo){
            return selectedNodo == Nodo ? operadoraActiveClass : ""
        }

        $scope.nodoFilterFn = function(Nodo){
            var valor=false;
            if(angular.isObject(selectedNodo)){
                valor = Nodo.nombre == selectedNodo.nombre;
            }
            return valor;
        }


        $scope.selectProtocol = function (event, clase) {
            $scope.selectedProtocol = $(event.target).html();
            $('.' + clase).removeClass("active");
            $(event.target).parent().addClass("active");
        }

        $scope.getactiveProtocol = function (nodoclass) {
            return $("." + nodoclass).hasClass("active")
        }
    })