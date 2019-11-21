
const Task = require('../models/tasks')
const Groups = require('../models/groups')
const Student = require('../models/students')

async function create (groupId, { title, deliveryDate, description }) {
  const newTask = await Task.create({
    title,
    deliveryDate,
    description,
    group: groupId
  })
  const group = await Groups.findById(groupId)
  const groupTasks = [
    ...group.tasks,
    newTask._id
  ]

  const studentsPromises = group.students.map(studentId => {
    return Student.findById(studentId)
  })
  const students = await Promise.all(studentsPromises)

  const studentsTasks = students.map(student => {
    const updatedTasks = [
      ...student.tasks,
      {
        taskId: newTask._id,
        isFinished: false
      }
    ]
    return Student.findByIdAndUpdate(student._id, { tasks: updatedTasks })
  })

  await Promise.all(studentsTasks)

  await Groups.findByIdAndUpdate(groupId, { tasks: groupTasks })

  return newTask
}

function getAll () {
  return Task.find()
}

function getManyByStudentId (studentId) {
  return Task.find({ studentId })
}

function getById (id) {
  return Task.findById(id).populate('group')
}

function deleteById (id) {
  return Task.findByIdAndUpdate(id, { isDeleted: true })
}

function updateById (id, newData) {
  return Task.findByIdAndUpdate(id, newData)
}

module.exports = {
  create,
  getAll,
  getManyByStudentId,
  getById,
  deleteById,
  updateById
}
