'use strict'

//REQUIRES
var express = require('express')
var bodyParser = require('body-parser')

//USANDO LA DEPENDENCIA EXPRESS
var app = express();

//CARGA DE ARCHIVOS DE RUTA
var producto_routes = require('./routes/producto');
var rock_routes = require('./routes/rock');
var pop_routes = require('./routes/pop');


//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//CONFIGURACION DE CABECERAS Y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Witdh,Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();  
})

//REESCRIBIR RUTAS
app.use('/api/',producto_routes);
app.use('/api/',rock_routes);
app.use('/api/',pop_routes);

//EXPORTAR MODULO
module.exports = app;