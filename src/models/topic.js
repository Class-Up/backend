const mongoose = require('mongoose')

const topicSchema = mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  name: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Topic', topicSchema)
