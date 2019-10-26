
const express = require('express')

const event = require('../usecases/events')

const router = express.Router()

router.get('/', async (request, response) => {
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
      message: 'Something failed',
      data: {
        error: error.message,
        endPoint: 'events.get',
        route: '/'
      }
    })
  }
})

router.get('/:id', async (request, response) => {
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
        error: error.message,
        endPoint: 'events.get',
        route: '/:id'
      }
    })
  }
})

router.get('/:studentId', async (request, response) => {
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
        error: error.message,
        endPoint: 'events.get',
        route: '/:studentId'
      }
    })
  }
})

router.post('/', async (request, response) => {
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
        error: error.message,
        endPoint: 'events.post',
        route: '/'
      }
    })
  }
})

router.patch('/:id', async (request, response) => {
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
        error: error.message,
        endPoint: 'events.patch',
        route: '/:id'
      }
    })
  }
})

router.delete('/:id', async (request, response) => {
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
      error: error.message,
      endPoint: 'events.delete',
      route: '/:id'
    })
  }
})

module.exports = router
