
const bcrypt = require('../lib/bcrypt')

const Student = require('../models/student')

function create ({ firstName, lastName, email, picture, age, password, gender, medals, schoolGrade }) {
  const hash = bcrypt.hash(password)
  return Student.create({
    firstName,
    lastName,
    email,
    picture,
    age,
    password: hash,
    gender,
    medals,
    schoolGrade
  })
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
