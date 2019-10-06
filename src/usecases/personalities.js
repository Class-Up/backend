
const Personality = require('../models/personality')

function create ({ studentId, personality }) {
  return Personality.create({
    studentId,
    personality
  })
}

function getAll () {
  return Personality.find()
}

function getById (id) {
  return Personality.findById(id)
}

function updateById (id, newData) {
  return Personality.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Personality.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
