
const mongoose = require('mongoose')

const medalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Medal', medalSchema)
