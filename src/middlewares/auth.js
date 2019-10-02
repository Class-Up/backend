
const jwt = require('../lib/jwt')

async function auth (request, response, next) {
  try {
    const { authorization: token } = request.headers

    const isTokenValid = await jwt.verify(token)
    if (!isTokenValid) throw new Error('Unauthorized')
    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Invalid Token',
      error: error.message
    })
  }
}

module.exports = auth
