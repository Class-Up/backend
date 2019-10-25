
const express = require('express')

const groups = require('../usecases/groups')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const allGroups = await groups.getAll()
    response.json({
      success: true,
      message: 'All Groups',
      data: {
        groups: allGroups
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'groups.get',
        route: '/'
      }
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const allGroups = await groups.getById(id)
    response.json({
      success: true,
      message: 'All Groups',
      data: {
        groups: allGroups
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'groups.get',
        route: '/:id'
      }
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newGroup = await groups.create(request.body)
    response.json({
      success: true,
      message: 'Group Created',
      data: {
        group: newGroup
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'groups.post',
        route: '/'
      }
    })
  }
})

router.patch('/', async (request, response) => {
  try {
    const publicGroup = await groups.makePublic(request.body)
    response.json({
      success: true,
      message: 'Public Group',
      data: {
        group: publicGroup
      }
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'groups.patch',
        route: '/'
      }
    })
  }
})

router.post('/enroll', async (request, response) => {
  try {
    const enrollData = await groups.enroll(request.body)
    response.json({
      success: true,
      message: 'Group Created',
      data: enrollData
    })
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'something failed',
      data: {
        error: error.message,
        endPoint: 'groups.post',
        route: '/enroll'
      }
    })
  }
})

module.exports = router
