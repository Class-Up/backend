
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
    pattern: /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[@$!%*?&])[A-ZÑa-zñ\d@$!%*?&]{8,}$/ // eslint-disable-line no-useless-escape
  },
  gender: {
    type: String
  },
  schoolGrade: {
    type: String
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
      type: mongoose.Schema.ObjectId,
      ref: 'Medal'
    }]
  },
  notes: {
    type: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Note'
    }]
  },
  events: {
    type: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Event'
    }]
  },
  tasks: {
    type: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Task'
    }]
  }
})

module.exports = mongoose.model('Student', studentSchema)
