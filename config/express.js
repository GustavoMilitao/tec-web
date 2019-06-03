var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,mongoose = require('mongoose')
    ,product = require('../app/entities/product')
    ,routesProduct = require('../app/routes/api/productRoutes')
    ,routes = require('../app/routes/app');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

var uri = "mongodb://eckounltd:cefet123@custerpokemon-shard-00-00-zznsg.mongodb.net:27017,custerpokemon-shard-00-01-zznsg.mongodb.net:27017,custerpokemon-shard-00-02-zznsg.mongodb.net:27017/pokedeck?ssl=true&replicaSet=CusterPokemon-shard-0&authSource=admin";
mongoose.connect(uri); 



routesProduct(app);
routes(app);

module.exports = app;