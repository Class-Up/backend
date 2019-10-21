const express = require('express')

const teacher = require('../usecases/teacher')

const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.post('/', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.post('/login', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
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
      error: error.message
    })
  }
})

module.exports = router
