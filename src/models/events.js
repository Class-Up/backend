
const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
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

module.exports = mongoose.model('Event', eventSchema)
