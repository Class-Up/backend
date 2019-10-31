
const Medal = require('../models/medals')

function create ({ name, value }) {
  return Medal.create({
    name,
    value
  })
}

function getAll () {
  return Medal.find()
}

function getById (id) {
  return Medal.findById(id)
}

function updateById (id, newData) {
  return Medal.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Medal.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
