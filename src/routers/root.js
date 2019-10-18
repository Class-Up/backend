
const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const apiDocsHtmlPath = path.resolve(`${__dirname}/../api.html`)
    response.sendFile(apiDocsHtmlPath)
  } catch (error) {
    response.json({
      success: false,
      message: 'Something Went Wrong',
      error: error.message
    })
  }
})

module.exports = router
