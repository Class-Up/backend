const mongoose = require('mongoose')

const groupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  students: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    }]
  },
  tasks: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }]
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
  dateUpdated: {
    type: Date,
    default: new Date()
  },
  signCode: {
    type: Number
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  }
})

module.exports = mongoose.model('Group', groupSchema)
