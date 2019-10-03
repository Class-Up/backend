
const express = require('express')

const event = require('../usecases/events')

const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/', auth, async (request, response) => {
  try {
    const allEvents = await event.getAll()
    response.json({
      success: true,
      message: 'All events',
      data: {
        events: allEvents
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
    const eventFound = await event.getById(id)
    response.json({
      success: true,
      message: 'All events',
      data: {
        event: eventFound
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
    const studentEvents = await event.getManyByStudentId(studentId)
    response.json({
      success: true,
      message: 'All events of the student',
      data: {
        events: studentEvents
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
    const newEvent = await event.create(request.body)
    response.json({
      success: true,
      message: 'Event Created',
      data: {
        event: newEvent
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
    const newEvent = await event.updateById(id, body)
    response.json({
      success: true,
      message: 'Event Updated',
      data: {
        event: newEvent
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

    const deletedEvent = await event.deleteById(id)

    response.json({
      success: true,
      message: 'Event deleted',
      data: {
        event: deletedEvent
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
