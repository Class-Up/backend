const express = require('express')

const task = require('../usecases/tasks')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allTasks = await task.getAll()
    response.json({
      success: true,
      message: 'All Tasks',
      data: {
        task: allTasks
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'tasks.get',
        route: '/'
      }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const taskFound = await task.getById(id)
    response.json({
      success: true,
      message: 'All Tasks',
      data: {
        task: taskFound
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'tasks.get',
        route: '/:id'
      }
    })
  }
})

router.get('/:studentId', async (request, response) => {
  try {
    const { studentId } = request.params
    const studentTasks = await task.getManyByStudentId(studentId)
    response.json({
      success: true,
      message: 'All Tasks of the student',
      data: {
        task: studentTasks
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'tasks.get',
        route: '/:studentId'
      }
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const { groupId, taskData } = request.body
    const newTask = await task.create(groupId, taskData)
    response.json({
      success: true,
      message: `Task Created and added to group ${groupId}`,
      data: {
        task: newTask
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'tasks.post',
        route: '/'
      }
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const { body } = request
    const newTask = await task.updateById(id, body)
    response.json({
      success: true,
      message: 'Task Updated',
      data: {
        task: newTask
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'tasks.patch',
        route: '/:id'
      }
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedTask = await task.deleteById(id)

    response.json({
      success: true,
      message: 'Task deleted',
      data: {
        task: deletedTask
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      error: error.message,
      endPoint: 'tasks.delete',
      route: '/:id'
    })
  }
})

module.exports = router
