
const Group = require('../models/groups')

function create ({ name, teacherId, topic, students }) {
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

module.exports = {
  create,
  getAllTasks,
  getAllStudents
}
