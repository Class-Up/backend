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
  description: {
    type: String,
    required: true
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
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  }
})

module.exports = mongoose.model('Task', taskSchema)
