
const express = require('express')
const cors = require('cors')
const path = require('path')

const studentRouter = require('./routers/students')
const medalsRouter = require('./routers/medals')
const notesRouter = require('./routers/notes')
const tasksRouter = require('./routers/tasks')
const teacherRouter = require('./routers/teachers')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/students', studentRouter)
app.use('/notes', notesRouter)
app.use('/medals', medalsRouter)
app.use('/tasks', tasksRouter)
app.use('/teachers', teacherRouter)

app.get('/', (request, response) => {
  const apiDocsHtmlPath = path.resolve(`${__dirname}/api.html`)
  response.sendFile(apiDocsHtmlPath)
})

module.exports = app
