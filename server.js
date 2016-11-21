var express = require('express');
var app= express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/routerG');

rutas = mongoose.model('rutas6',{
     nombre: String,
     operadora: String,
     protocolos:{
         ssh : [],
         mysql:[]
     }

});

app.use(express.static('public'));
app.get('/api/rutas', function(req,res){
    rutas.find(function(err,data){
        res.json(data);
    })
})

app.post('/api/test',function(req,res){
    var a = new rutas({
        nombre:"dan2",
        operadora:"mvp",
        protocolos:{
            ssh:[
                [{
                    host: '102.523.121.3'
                }]
            ],
            mysql:[]
        }
    })
   
   a.save(function(err){
       if(err)
            res.send(err);

            res.json({message:"ssss"})
   })
})
app.listen(3000,function(){
    console.log('Escuchando en 3000')
})