
const express = require('express')

const personality = require('../usecases/personalities')
const student = require('../usecases/students')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const { studentId, personalityText } = request.body
    const newPersonality = await personality.create(personalityText)
    await student.addPersonalityById(studentId, newPersonality._id)

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

router.get('/', async (request, response) => {
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

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const personalityFound = await personality.getById(id)
    response.json({
      success: true,
      message: 'This Is Your Personality',
      data: {
        personality: personalityFound
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

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const { personalityData } = request.body

    const updatedPersonality = await personality.updateById(id, personalityData)

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

router.delete('/:id', async (request, response) => {
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
