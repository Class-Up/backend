const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Score', scoreSchema)
