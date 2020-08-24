const request = require('request')
const crypto = require('crypto')

const apiKey = '[Your API key here]'
const apiSecret = '[Your API secret here]'
const baseUrl = 'https://api.bitopro.com/v2'

const url = '/accounts/balance'
const nonce = Date.now()
const completeURL = baseUrl + url
// This is the default body for the authenticated APIs using GET method
const body = { identity: '[Your account (email)]', nonce }

const payload = Buffer.from(JSON.stringify(body)).toString('base64')


const signature = crypto
  .createHmac('sha384', apiSecret)
  .update(payload)
  .digest('hex')

const options = {
  url: completeURL,
  headers: {
    'X-BITOPRO-APIKEY': apiKey,
    'X-BITOPRO-PAYLOAD': payload,    // For the authenticated APIs using DELETE method, you don't need the payload field.
    'X-BITOPRO-SIGNATURE': signature
  },
  body: JSON.stringify(body)    // For the authenticated APIs using GET method, you don't need the body field.
}

// GET
return request.get(
  options,
  function(error, response, body) {
    console.log('response:', JSON.stringify(body, 0, 2))
  }
)