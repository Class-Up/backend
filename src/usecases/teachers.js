const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

const Teacher = require('../models/teachers')

async function create ({ firstName, lastName, email, picture, password }) {
  const hash = await bcrypt.hash(password)
  return Teacher.create({
    firstName,
    lastName,
    email,
    picture,
    password: hash
  })
}

function getAll () {
  return Teacher.find()
}

async function getById (id) {
  return Teacher.findById(id)
    .populate({
      path: 'groups',
      populate: {
        path: 'students',
        populate: {
          path: 'medals'
        }
      }
    })
}

function deleteById (id) {
  return Teacher.findByIdAndUpdate(id, { isDeleted: true })
}

function updateById (id, newData) {
  return Teacher.findByIdAndUpdate(id, newData)
}

async function login (email, password) {
  const teacherFound = await Teacher.findOne({ email })
  if (!teacherFound) throw new Error('email or password wrong')

  const isPasswordCorrect = await bcrypt.compare(password, teacherFound.password)
  if (!isPasswordCorrect) throw new Error('email or password wrong')

  return jwt.sign({ id: teacherFound.id })
}

function getGroups (teacherId) {
  return Teacher.findById(teacherId).populate('groups')
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
  login,
  getGroups
}
