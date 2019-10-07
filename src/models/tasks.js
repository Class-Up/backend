const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  dateUpdated: {
    type: Date,
    default: new Date()
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  studentId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students'
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    dafault: false
  },
  grade: {
    type: Number,
    required: true,
    topicId: Number
  }
})

module.exports = mongoose.model('Task', taskSchema)
