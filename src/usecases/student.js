
const Student = require('../models/student')

function getAll () {
  return Student.find()
}

function getById (id) {
  return Student.findById(id)
}

module.exports = {
  getAll,
  getById
}
