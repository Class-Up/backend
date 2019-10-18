
require('dotenv').config()

const dbConnect = require('./src/lib/db')
const server = require('./src/server')

const listenServer = function () {
  return new Promise((resolve, reject) => {
    server.listen(8080, () => {
      resolve()
    })
  })
}

async function main () {
  await dbConnect()
  console.log('DB Connected')
  await listenServer()
  console.log('Server Listening in port 8080')
}

main()
  .then(() => {
    console.log('API Ready')
  })
  .catch(error => {
    console.error('Error: ', error)
  })
