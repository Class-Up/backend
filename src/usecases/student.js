
const Student = require('../models/student')

function create (newStudent) {
  return Student.create(newStudent)
}

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
  create,
  getAll,
  getById,
  deleteById,
  updateById
}
