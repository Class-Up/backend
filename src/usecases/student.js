
const Student = require('../models/student')

function getAll () {
  return Student.find()
}

module.exports = {
  getAll
}
