
const jwt = require('../lib/jwt')
const bcrypt = require('../lib/bcrypt')

const Student = require('../models/students')
const Medals = require('../models/medals')

async function create ({ firstName, lastName, email, picture, age, password, gender, medals, schoolGrade }) {
  const hash = await bcrypt.hash(password)
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
    .populate('groups')
    .populate('tasks.taskId')
    .populate('medals')
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

async function checkTaskAsFinished (studentId, taskId) {
  const studentFound = await Student.findById(studentId)

  const updatedTasks = studentFound.tasks.map(studentTask => {
    const studentTaskIdString = studentTask.taskId.toString()

    if (!taskId === studentTaskIdString) return studentTask
    return {
      isFinished: true,
      taskId: studentTask.taskId,
      _id: studentTask._id
    }
  })

  await Student.findByIdAndUpdate(studentFound._id, {
    tasks: updatedTasks
  })

  return Student.findById(studentFound._id)
}

function addPersonalityById (studentId, personalityId) {
  return Student.findByIdAndUpdate(studentId, { personality: personalityId })
}

async function giveMedal (studentId, medalId) {
  const studentFound = await Student.findById(studentId)
  const medalFound = await Medals.findById(medalId)

  console.log('Stuent:', studentId)
  console.log('Stuent:', studentFound)

  const medals = [
    ...studentFound.medals,
    medalFound._id
  ]

  await Student.findByIdAndUpdate(studentId, { medals })

  return Student.findById(studentId)
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
  login,
  giveMedal,
  checkTaskAsFinished,
  addPersonalityById
}
