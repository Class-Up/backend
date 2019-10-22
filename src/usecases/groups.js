
const Group = require('../models/groups')

function create ({ name, topic, students }) {
  return Group.create({
    name,
    topic,
    students
  })
}

function getAllStudents (groupId) {
  return Group.findById(groupId).populate('students')
}

function getAllTasks (groupId) {
  return Group.findById(groupId).populate('tasks')
}

async function addStudent (groupId, newStudentId) {
  const group = await Group.findById(groupId)
  const students = [
    ...group.students,
    newStudentId
  ]

  return Group.findOneAndUpdate(groupId, { students })
}

module.exports = {
  create,
  getAllTasks,
  getAllStudents,
  addStudent
}
