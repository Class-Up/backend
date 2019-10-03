
const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
  studentId: {
    type: Int,
    required: true,
    minlength: 5
  },
  title: {
    type: String,
    required: false,
    minlength: 5
  },
  body: {
    type: String,
    required: true,
    minlength: 5
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
