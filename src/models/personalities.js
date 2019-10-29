const mongoose = require('mongoose')

const personalitySchema = mongoose.Schema({
  data: {
    type: Object,
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

module.exports = mongoose.model('Personality', personalitySchema)
