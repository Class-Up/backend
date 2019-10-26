
const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  body: {
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
  isDeleted: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Note', noteSchema)
