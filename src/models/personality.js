const mongoose = require('mongoose')

const personalitySchema = mongoose.Schema({

  studentId: {
    type: String,
    required: true
  },
  personality: {
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
  }

})

module.exports = mongoose.model('Personality', personalitySchema)
