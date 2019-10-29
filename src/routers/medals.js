
const express = require('express')

const medal = require('../usecases/medals')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const newMedal = await medal.create(request.body)
    response.json({
      success: true,
      message: 'New Medal created',
      data: {
        medal: newMedal
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'groups.post',
      route: '/'
    })
  }
})

router.get('/', async (request, response) => {
  try {
    const allMedals = await medal.getAll()
    response.json({
      success: true,
      message: 'All The Medals',
      data: {
        medals: allMedals
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'groups.get',
      route: '/'
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const idMedal = await medal.getById(id)
    response.json({
      success: true,
      message: 'This Is Your Medal',
      data: {
        medal: idMedal
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'groups.get',
      route: '/:id'
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const updatedMedal = await medal.updateById(id)

    response.json({
      success: true,
      message: 'Medal Updated',
      data: {
        medal: updatedMedal
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'groups.post',
      route: '/:id'
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedMedal = await medal.deleteById(id)

    response.json({
      success: true,
      message: 'Medal Deleted',
      data: {
        deletedMedal: deletedMedal
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'groups.delete',
      route: '/:id'
    })
  }
})

module.exports = router
