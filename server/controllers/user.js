let user = require('../models/user')
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()

const addUser = (req,res) => {
  let hash = bcrypt.hashSync(req.body.password, salt);
  user.create({
    username:req.body.username,
    password:hash
  }).then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}

const getUser = (req,res) => {
  user.find().then((user)=>{
    res.send(user)
  }).catch((err)=>{
    res.send(err)
  })
}

const loginUser = (req,res) => {
  user.findOne({
    username:req.body.username
  })
  .then(data => {
    if (bcrypt.compareSync(req.body.password,data.password)) {
      var token = jwt.sign({
        _id:data._id,
        username: data.username
      },process.env.DB_HOST);
      res.send(token)
    } else {
      res.send('Fail')
    }
  })
  .catch((err)=>{
    res.send('Fail')
  })
}

module.exports = {
  addUser,
  getUser,
  loginUser
}
