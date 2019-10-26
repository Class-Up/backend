
const express = require('express')

const note = require('../usecases/notes')

const router = express.Router()

router.post('/', async (request, response) => {
  try {
    const newNote = await note.create(request.body)
    response.json({
      success: true,
      message: 'New Note Created',
      data: {
        note: newNote
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'notes.post',
      route: '/'
    })
  }
})

router.get('/', async (request, response) => {
  try {
    const allNotes = await note.getAll()
    response.json({
      success: true,
      message: 'All The Notes',
      data: {
        notes: allNotes
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'notes.get',
      route: '/'
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const idNote = await note.getById(id)
    response.json({
      success: true,
      message: 'This Is Your Note',
      data: {
        note: idNote
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'notes.get',
      route: '/:id'
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const updatedNote = await note.updateById(id)

    response.json({
      success: true,
      message: 'Note Updated',
      data: {
        note: updatedNote
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'notes.patch',
      route: '/:id'
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const deletedNote = await note.deleteById(id)

    response.json({
      success: true,
      message: 'Note Deleted',
      data: {
        deletedNote: deletedNote
      }
    })
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message,
      endPoint: 'notes.delete',
      route: '/:id'
    })
  }
})

module.exports = router
