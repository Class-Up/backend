const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

const Teacher = require('../models/teachers')
const Group = require('../models/groups')

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
  const teacherFound = await Teacher.findById(id)
  const groupPromises = teacherFound.groups.map(group => {
    return Group.findById(group).populate('students')
  })
  const groups = await Promise.all(groupPromises)

  const students = groups.reduce((students, group = {}) => {
    return [
      ...students,
      ...group.students
    ]
  }, [])

  return {
    ...teacherFound._doc,
    groups,
    students
  }
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
