angular.module("customFilters",[])
.filter("protocol",function(){
    return function(data){
        if(angular.isArray(data)){
            var results=[];
            angular.forEach(data[0]["protocolos"],function(value,key){
                results.push(key);
            })
            return results;
        }else{
            return data;
        }
    }
})