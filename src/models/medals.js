
const mongoose = require('mongoose')

const medalSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    minlength: 5
  },
  name: {
    type: String,
    required: false,
    minlength: 5
  },
  name: {
    type: String,
    required: false,
    minlength: 5
  },
  value: {
    type: int,
    required: true,
    minlength: 5
  }
})

module.exports = mongoose.model('Medal', medalSchema)
