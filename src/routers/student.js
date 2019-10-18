
const express = require('express')

const student = require('../usecases/student')

const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.post('/', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.post('/login', auth, async (request, response) => {
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
        error: error.message
      }
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
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
      error: error.message
    })
  }
})

module.exports = router
