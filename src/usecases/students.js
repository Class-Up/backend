
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

const Student = require('../models/students')

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

async function login (email, password) {
  const studentFound = await Student.findOne({ email })
  if (!studentFound) throw new Error('email or password wrong')

  const isPasswordCorrect = await bcrypt.compare(password, studentFound.password)
  if (!isPasswordCorrect) throw new Error('email or password wrong')

  return jwt.sign({ id: studentFound.id })
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
  login
}
