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
  isDeleted: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', taskSchema)
