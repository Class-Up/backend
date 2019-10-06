
const Score = require('../models/score')

function create ({ value }) {
  return Score.create({
    value
  })
}

function getAll () {
  return Score.find()
}

function getById (id) {
  return Score.findById(id)
}

function updateById (id, newData) {
  return Score.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Score.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
