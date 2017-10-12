const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username:'string',
  password:'string'
})

const users = mongoose.model('users', schema)

module.exports = users
