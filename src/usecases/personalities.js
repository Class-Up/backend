
const personalityInsights = require('../lib/personality-insights')

const Personality = require('../models/personalities')

async function create ({ personalityText }) {
  const profileParams = {
    content: personalityText,
    contentType: 'text/plain;charset=utf-8',
    contentLanguage: 'es',
    acceptLanguage: 'es',
    consumptionPreferences: true,
    rawScores: true,
    language: 'es'
  }

  // ToDo: Esta funcion regresa un warning
  // con un await el catch del try-catch se activa
  // con un then() y catch() entra al then pero no se resuelve la promesa tiempo
  // con un callback no se resuelve la promesa a tiempo
  const profileCreatedPromise = personalityInsights.profile(profileParams)

  const profileCreated = await Promise.resolve(profileCreatedPromise)
  // console.log('PER:', personalityCreated)

  return Personality.create({
    personality: profileCreated
  })
}

function getAll () {
  return Personality.find()
}

function getById (id) {
  return Personality.findById(id)
}

function updateById (id, newData) {
  return Personality.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Personality.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
