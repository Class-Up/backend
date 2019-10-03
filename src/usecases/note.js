
const Student = require('../models/note')

function create({ tittle, body }) {

  return Note.create({
    tittle,
    body
  })
}

function getAll() {
  return Note.find()
}

function getById(id) {
  return Note.findById(id)
}

function updateById(id, newData) {
  return Note.findByIdAndUpdate(id, newData)
}

function deleteById(id) {
  return Note.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
