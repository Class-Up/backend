
const express = require('express')

const personality = require('../usecases/personalities')

const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', auth, async (request, response) => {
  try {
    const newPersonality = await personality.create(request.body)
    response.json({
      success: true,
      message: 'Personality Created',
      data: {
        personality: newPersonality
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
    const allPersonalities = await personality.getAll()
    response.json({
      success: true,
      message: 'All The Personalities',
      data: {
        personalities: allPersonalities
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
    const personalitySearchById = await personality.getById(id)
    response.json({
      success: true,
      message: 'This Is Your Personality',
      data: {
        personality: personalitySearchById
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

    const updatedPersonality = await personality.updateById(id)

    response.json({
      success: true,
      message: 'Personality Updated',
      data: {
        personality: updatedPersonality
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

    const deletedPersonality = await personality.deleteById(id)

    response.json({
      success: true,
      message: 'Personality Deleted',
      data: {
        deletedPersonality: deletedPersonality
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