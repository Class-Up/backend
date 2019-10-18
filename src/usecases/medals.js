
const Medal = require('../models/medal')

function create ({ name, image, value }) {
  return Medal.create({
    name,
    image,
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
