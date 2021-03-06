
const Group = require('../models/groups')
const Student = require('../models/students')
const Teacher = require('../models/teachers')

async function create ({ name, topic, students, teacher }) {
  const teacherFound = await Teacher.findById(teacher)
  const groupCreated = await Group.create({
    name,
    topic,
    students,
    teacher
  })

  const teacherGroups = [
    ...teacherFound.groups,
    groupCreated._id
  ]

  await Teacher.findByIdAndUpdate(teacher, { groups: teacherGroups })

  return groupCreated
}

function getById (groupId) {
  return Group.findById(groupId)
    .populate('students')
    .populate('tasks')
    .populate('teacher')
}

function getAll () {
  return Group.find()
}

function getAllStudents (groupId) {
  return Group.findById(groupId).populate('students')
}

function getAllTasks (groupId) {
  return Group.findById(groupId).populate('tasks')
}

function getTeacher (groupId) {
  return Group.findById(groupId).populate('teacher')
}

async function addStudent (groupId, newStudentId) {
  const group = await Group.findById(groupId)
  const students = [
    ...group.students,
    newStudentId
  ]

  return Group.findOneAndUpdate(groupId, { students })
}

async function makePublic (groupId) {
  const signCode = Math.floor((Math.random() * 1000) + 1)

  await Group.findByIdAndUpdate(groupId, { signCode })
  return Group.findById(groupId)
}

async function enroll ({ studentId, signCode }) {
  const groupFound = await Group.findOne({ signCode })
  const studentFound = await Student.findById(studentId)

  const students = [
    ...groupFound.students,
    studentFound._id
  ]

  const groupUpdated = await Group.findByIdAndUpdate(groupFound._id, { students })

  const groups = [
    ...studentFound.groups,
    groupFound._id
  ]

  const studentUpdated = await Student.findByIdAndUpdate(studentFound._id, { groups, tasks: groupFound.tasks })

  return {
    student: studentUpdated,
    group: groupUpdated
  }
}

module.exports = {
  create,
  getById,
  getAll,
  getTeacher,
  getAllTasks,
  getAllStudents,
  addStudent,
  makePublic,
  enroll
}
