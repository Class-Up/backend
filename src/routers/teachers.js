const express = require('express')

const teacher = require('../usecases/teachers')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allTeachers = await teacher.getAll()
    response.json({
      success: true,
      message: 'All Teachers',
      data: {
        teacher: allTeachers
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'teacher.get',
        route: '/'
      }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const teacherFound = await teacher.getById(id)
    response.json({
      success: true,
      message: 'Teacher Found',
      data: {
        teacher: teacherFound
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'teacher.get',
        route: '/'
      }
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newTeacher = await teacher.create(request.body)
    response.json({
      success: true,
      message: 'Teacher Created',
      data: {
        teacher: newTeacher
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'teacher.post',
        route: '/'
      }
    })
  }
})

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const token = await teacher.login(email, password)
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
        endPoint: 'teacher.post',
        route: '/login'
      }
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedTeacher = await teacher.deleteById(id)

    response.json({
      success: true,
      message: 'Teacher deleted',
      data: {
        teacher: deletedTeacher
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something failed',
      error: error.message,
      endPoint: 'teacher.delete',
      route: '/:id'
    })
  }
})

module.exports = router
