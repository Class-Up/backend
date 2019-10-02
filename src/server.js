
const express = require('express')
const cors = require('cors')

const studentRouter = require('./routers/student')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/students', studentRouter)

app.get('/', (request, response) => {
  response.json({
    message: 'Hola Mundo'
  })
})

module.exports = app
