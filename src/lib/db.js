
const mongoose = require('mongoose')

const cfenv = require('cfenv')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retry=true&w=majority`
const uri = 'mongodb+srv://ibm_cf:KKHbf7X1UIR99ks3@classup-hofdh.mongodb.net/classup?retry=true&w=majority'

console.log('Process.env:', process.env)
console.log('DB_USER:', DB_USER)
console.log('DB_PASSWORD:', DB_PASSWORD)
console.log('DB_HOST:', DB_HOST)
console.log('DB_NAME:', DB_NAME)

const appEnv = cfenv.getAppEnv()
const appSer = cfenv.getServices()

console.log('------------------------------------------------------')
console.log('App Env:', appEnv)
console.log('App Ser:', appSer)
console.log('------------------------------------------------------')

module.exports = () => mongoose.connect(
  uri,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
