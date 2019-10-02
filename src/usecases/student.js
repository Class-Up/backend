
const Student = require('../models/student')

function getAll () {
  return Student.find()
}

function getById (id) {
  return Student.findById(id)
}

function deleteById (id) {
  return Student.findByIdAndUpdate(id, { isDeleted: true })
}

function updateById (id, newData) {
  return Student.findByIdAndUpdate(id, newData)
}

module.exports = {
  getAll,
  getById,
  deleteById,
  updateById
}
