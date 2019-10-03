
const Event = require('../models/events')

function create ({ title, deliveryDate, studentId }) {
  return Event.create({
    title,
    deliveryDate,
    studentId
  })
}

function getAll () {
  return Event.find()
}

function getManyByStudentId (studentId) {
  return Event.find({ studentId })
}

function getById (id) {
  return Event.findById(id)
}

function deleteById (id) {
  return Event.findByIdAndUpdate(id, { isDeleted: true })
}

function updateById (id, newData) {
  return Event.findByIdAndUpdate(id, newData)
}

module.exports = {
  create,
  getAll,
  getManyByStudentId,
  getById,
  deleteById,
  updateById
}
