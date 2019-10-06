
const express = require('express')
const cors = require('cors')

const studentRouter = require('./routers/student')
const medalsRouter = require('./routers/medals')
const notesRouter = require('./routers/notes')
const scoresRouter = require('./routers/scores')
const topicsRouter = require('./routers/topics')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/students', studentRouter)
app.use('/notes', notesRouter)
app.use('/medals', medalsRouter)
app.use('/scores', scoresRouter)
app.use('/topics', topicsRouter)


app.get('/', (request, response) => {
  response.json({
    message: 'Hola Mundo'
  })
})

module.exports = app
