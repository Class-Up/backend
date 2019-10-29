
const PersonalityInsightsV3 = require('ibm-watson/personality-insights/v3')
const { IamAuthenticator } = require('ibm-watson/auth')

const {
  PERSONALITY_APIKEY,
  PERSONALITY_URL,
  PERSONALITY_VERSION
} = process.env

const personalityInsights = new PersonalityInsightsV3({
  version: PERSONALITY_VERSION,
  authenticator: new IamAuthenticator({
    apikey: PERSONALITY_APIKEY
  }),
  url: PERSONALITY_URL,
  disableSslVerification: true
})

module.exports = personalityInsights
