
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
    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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

})

module.exports = mongoose.model('Student', studentSchema)
