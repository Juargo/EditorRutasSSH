angular.module("customFilters",[])
.filter("unique",function(){
    return function(data,propertyName){
        if(angular.isArray(data) && angular.isString(propertyName)){
            var results = [];
            var keys={};
            for(var i=0;i<data.length;i++){
                var val =data[i][propertyName];
                if(angular.isUndefined(keys[val])){
                    keys[val]=true;
                    results.push(val);
                }
            }
            return results;
        }else{
            return data;
        }
    }
})
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