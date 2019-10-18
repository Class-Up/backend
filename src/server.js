
const express = require('express')
const cors = require('cors')

const rootRouter = require('./routers/root')
const studentRouter = require('./routers/student')
const medalsRouter = require('./routers/medals')
const notesRouter = require('./routers/notes')
const scoresRouter = require('./routers/scores')
const topicsRouter = require('./routers/topics')
const tasksRouter = require('./routers/tasks')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', rootRouter)
app.use('/students', studentRouter)
app.use('/notes', notesRouter)
app.use('/medals', medalsRouter)
app.use('/scores', scoresRouter)
app.use('/topics', topicsRouter)
app.use('/tasks', tasksRouter)

app.get('/', (request, response) => {
  response.json({
    message: 'Hola Mundo'
  })
})

module.exports = app
