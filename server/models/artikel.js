const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:'string',
  kontent:'string',
  kategori:'string',
  author:[{type:mongoose.Schema.Types.ObjectId, ref: 'users'}]
})

const artikels = mongoose.model('artikels', schema)

module.exports = artikels
