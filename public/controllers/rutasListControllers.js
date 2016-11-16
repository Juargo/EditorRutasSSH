angular.module("routerApp")
.controller("rutasListController",function($scope){
    var selectedProtocol = null;

    $scope.selectProtocol = function(event,clase){
        $scope.selectedProtocol = $(event.target).html();
        $('.'+ clase).removeClass("active");
        $(event.target).parent().addClass("active");
    }

    $scope.getactiveProtocol = function(nodoclass){
        return $("."+nodoclass).hasClass("active")
    }
})