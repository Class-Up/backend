
const express = require('express')

const score = require('../usecases/scores')

const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/scores', auth, async (request, response) => {
  try {
    const newScore = await score.create(request.body)
    response.json({
      success: true,
      message: 'New Score Added',
      data: {
        score: newScore
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

router.get('/scores', auth, async (request, response) => {
  try {
    const allScores = await score.getAll()
    response.json({
      success: true,
      message: 'All The Scores',
      data: {
        scores: allScores
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

router.get('/scores/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const idScore = await score.getById(id)
    response.json({
      success: true,
      message: 'This Is Your Score',
      data: {
        score: idScore
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

router.patch('/scores/:id', auth, async (request, response) => {
  try {
    const { id } = request.params

    const updatedScore = await score.updateById(id)

    response.json({
      success: true,
      message: 'Changes saved',
      data: {
        score: updatedScore
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

router.delete('/', auth, async (request, response) => {
  try {
    const { id } = request.params

    const deletedScore = await score.deleteById(id)

    response.json({
      success: true,
      message: 'Score Deleted',
      data: {
        deletedScore: deletedScore
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
