
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
  picture: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
  },
  age: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true,
    pattern: /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[@$!%*?&])[A-ZÑa-zñ\d@$!%*?&]{8,}$/
  },
  gender: {
    type: String
  },
  schoolGrade: {
    type: String
  },
  learningRate: {
    type: Object,
    properties: {
      kinesthetic: {
        type: Number
      },
      auditive: {
        type: Number
      },
      visual: {
        type: Number
      }
    },
    default: {}
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
  medals: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medal'
    }]
  },
  notes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }]
  },
  events: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }]
  },
  tasks: {
    type: [{
      isFinished: {
        type: Boolean,
        default: false
      },
      taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
      }
    }]
  },
  groups: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
    }]
  },
  personality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Personality'
  }
})

module.exports = mongoose.model('Student', studentSchema)
