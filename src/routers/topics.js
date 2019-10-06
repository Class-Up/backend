
const express = require('express')

const topic = require('../usecases/topics')

const router = express.Router()

const auth = require('../middlewares/auth')

router.post('/', auth, async (request, response) => {
  try {
    const newTopic = await topic.create(request.body)
    response.json({
      success: true,
      message: 'New Topic Created',
      data: {
        topic: newTopic
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message
    })
  }
})

router.get('/', auth, async (request, response) => {
  try {
    const allTopics = await topic.getAll()
    response.json({
      success: true,
      message: 'All The Topics',
      data: {
        topics: allTopics
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message
    })
  }
})

router.get('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const idTopic = await topic.getById(id)
    response.json({
      success: true,
      message: 'This Is Your Topic',
      topic: {
        note: idTopic
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message
    })
  }
})

router.patch('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params

    const updatedTopic = await topic.updateById(id)

    response.json({
      success: true,
      message: 'Topic Updated',
      data: {
        topic: updatedTopic
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params

    const deletedTopic = await topic.deleteById(id)

    response.json({
      success: true,
      message: 'Topic Deleted',
      data: {
        deletedTopic: deletedTopic
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message
    })
  }
})

module.exports = router
