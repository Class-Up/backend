
const mongoose = require('mongoose')

// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_NAME
// } = process.env

// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retry=true&w=majority`

const uri = 'mongodb+srv://skintigth:SkinMONGO94@classup-hofdh.mongodb.net/classup?retry=true&w=majority'

module.exports = () => mongoose.connect(
  uri,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
