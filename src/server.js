
const express = require('express')
const cors = require('cors')
const path = require('path')

const studentRouter = require('./routers/students')
const notesRouter = require('./routers/notes')
const tasksRouter = require('./routers/tasks')
const medalsRouter = require('./routers/medals')
const groupsRouter = require('./routers/groups')
const teacherRouter = require('./routers/teachers')
const personalitiesRouter = require('./routers/personalities')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/tasks', tasksRouter)
app.use('/notes', notesRouter)
app.use('/medals', medalsRouter)
app.use('/groups', groupsRouter)
app.use('/students', studentRouter)
app.use('/teachers', teacherRouter)
app.use('/personalities', personalitiesRouter)

app.get('/', (request, response) => {
  const apiDocsHtmlPath = path.resolve(`${__dirname}/api.html`)
  response.sendFile(apiDocsHtmlPath)
})

module.exports = app
