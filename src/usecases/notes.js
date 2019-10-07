
const Note = require('../models/notes')

function create ({ studentId, tittle, body }) {
  return Note.create({
    studentId,
    tittle,
    body
  })
}

function getAll () {
  return Note.find()
}

function getById (id) {
  return Note.findById(id)
}

function updateById (id, newData) {
  return Note.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Note.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
