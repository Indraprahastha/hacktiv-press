let artikel = require('../models/artikel')
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const addArtikel = (req,res) => {
  let iduser = jwt.verify(req.headers.token,process.env.DB_HOST,(err,decoded)=>{ return decoded._id})
  artikel.create({
    title:req.body.title,
    konten:req.body.konten,
    kategori:req.body.kategori,
    author:iduser
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const getArtikel = (req,res) => {
  artikel.find().populate('author','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const getPersonalArtikel = (req,res) => {
  let filter = jwt.verify(req.headers.token, process.env.DB_HOST,(err,decoded)=>{
    return decoded._id
  })
  artikel.find({author:filter}).populate('author','username').then((data)=>{
    res.send(data)
    console.log(filter);
  }).catch((err)=>{
    res.send(err)
  })
}

const findArtikel = (req,res) => {
  artikel.findById({
    _id:req.params.id
  }).populate('idgrup','nama').populate('iduser','username').then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const editArtikel = (req,res) => {
  artikel.update({
    _id:req.params.id
  },{
    title:req.body.title,
    konten:req.body.konten,
    kategori:req.body.kategori
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

const deleteArtikel = (req,res) => {
  artikel.remove({
    _id:req.params.id
  }).then((data)=>{
    res.send(data)
  }).catch((err)=>{
    res.send(err)
  })
}

module.exports = {
  addArtikel,
  getArtikel,
  findArtikel,
  editArtikel,
  deleteArtikel,
  getPersonalArtikel
}
