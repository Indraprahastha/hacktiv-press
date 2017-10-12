const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))

var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://Indraprahastha:Pancasila-85@cluster0-shard-00-00-jsidb.mongodb.net:27017,cluster0-shard-00-01-jsidb.mongodb.net:27017,cluster0-shard-00-02-jsidb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

mongoose.connect(uri);
var db = mongoose.connection;

let user = require('./routers/user.js')
let artikel = require('./routers/artikel.js')

app.use('/user',user)
app.use('/artikel',artikel)

app.listen(process.env.PORT || 3000, function(){
  console.log('HACKTIV-PRESS Jalan');
})
