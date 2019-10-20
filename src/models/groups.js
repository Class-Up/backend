const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
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
  }
})

module.exports = mongoose.model('Task', taskSchema)
