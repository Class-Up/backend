
const express = require('express')

const student = require('../usecases/students')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allStudents = await student.getAll()
    response.json({
      success: true,
      message: 'All students',
      data: {
        students: allStudents
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'students.get',
        route: '/'
      }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const studentFound = await student.getById(id)
    response.json({
      success: true,
      message: 'Student Found',
      data: {
        student: studentFound
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'students.get',
        route: '/:id'
      }
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newStudent = await student.create(request.body)
    response.json({
      success: true,
      message: 'Student Created',
      data: {
        student: newStudent
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'students.post',
        route: '/'
      }
    })
  }
})

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await student.login(email, password)
    response.json({
      success: true,
      message: 'Take your token',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'students.post',
        route: '/login'
      }
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedStudent = await student.deleteById(id)

    response.json({
      success: true,
      message: 'Student deleted',
      data: {
        student: deletedStudent
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      error: error.message,
      endPoint: 'students.delete',
      route: '/:id'
    })
  }
})

router.patch('/:id/finishTask', async (request, response) => {
  try {
    const { id: studentId } = request.params
    const taskId = request.body.taskId

    const studentUpdated = await student.checkTaskAsFinished(studentId, taskId)

    response.json({
      success: true,
      message: 'Student updated',
      data: {
        student: studentUpdated
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      error: error.message,
      endPoint: 'students.patch',
      route: '/:id/finishTask'
    })
  }
})

router.patch('/give-medal', async (request, response) => {
  try {
    const { studentId, medalId } = request.body

    const studentUpdated = await student.giveMedal(studentId, medalId)

    response.json({
      success: true,
      message: 'Student updated',
      data: {
        student: studentUpdated
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      error: error.message,
      endPoint: 'students.patch',
      route: '/:id/finishTask'
    })
  }
})

module.exports = router
