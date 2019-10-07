const express = require('express')

const task = require('../usecases/tasks')

const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.get('/:id', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.get('/:studentId', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.post('/', auth, async (request, response) => {
  try {
    const newTask = await task.create(request.body)
    response.json({
      success: true,
      message: 'Task Created',
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
        error: error.message
      }
    })
  }
})

router.patch('/:id', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
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
      error: error.message
    })
  }
})

module.exports = router
