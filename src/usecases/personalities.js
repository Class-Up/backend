
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

  return personalityInsights.profile(profileParams)
    .then(profile => {
      return Personality.create({
        personality: profile.result.personality
      })
    })
    .catch(error => {
      throw new Error('Error:', error)
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
