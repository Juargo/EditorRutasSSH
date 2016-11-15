var express = require('express');
var app= express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/routerG');

rutas = mongoose.model('rutas6',{
     host: String,
    operadora: String
});

app.use(express.static('public'));
app.get('/api/rutas', function(req,res){
    rutas.find(function(err,data){
        res.json(data);
    })
})
app.listen(3000,function(){
    console.log('Escuchando en 3000')
})