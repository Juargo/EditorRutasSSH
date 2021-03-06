var express = require('express');
var app= express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/routerG');

rutas = mongoose.model('rutas6',{
     nombre: String,
     operadora: String,
     protocolos:{
         ssh : [],
         mysql:[]
     }

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use(express.static('public'));
app.get('/api/rutas', function(req,res){
    rutas.find(function(err,data){
        res.json(data);
    })
})

app.post('/api/test',function(req,res){
    var nodos = req.body.nodo;
	res.send(req.body);
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

            //res.json(req)
            //res.send(req.body);
   })
})


app.post('/api/test2',function(req,res){
    ruta=0;
    //console.log(req.body.protocolos.ssh.length);
    for (i=0;i<req.body.protocolos.ssh.length;i++){
        //console.log(i);
        //console.log(req.body.protocolos.ssh[i]);
        if(req.body.protocolos.ssh[i]){
            ruta++;
            console.log(ruta);
            d = req.body.protocolos.ssh[i];
            //console.log(d);
            for(a in d){
                console.log(d[a].port);
            }
        }
    }
    //console.log(req.body.protocolos.ssh.length)
    res.end();
})
app.listen(3000,function(){
    console.log('Escuchando en 3000')
})
