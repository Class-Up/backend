
const Task = require('../models/tasks')

function create ({ title, deliveryDate, studentId, grade }) {
  return Task.create({
    title,
    deliveryDate,
    studentId,
    grade
  })
}

function getAll () {
  return Task.find()
}

function getManyByStudentId (studentId) {
  return Task.find({ studentId })
}

function getById (id) {
  return Task.findById(id)
}

function deleteById (id) {
  return Task.findByIdAndUpdate(id, { isDeleted: true })
}

function updateById (id, newData) {
  return Task.findByIdAndUpdate(id, newData)
}

module.exports = {
  create,
  getAll,
  getManyByStudentId,
  getById,
  deleteById,
  updateById
}
