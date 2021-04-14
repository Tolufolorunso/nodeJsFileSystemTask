const { writeFileSync } = require('fs')

// Used https module to fetch data from jsonplaceholder
const https = require('https')

const writeJson = (data) => {
  try {
    writeFileSync('./result/posts.json', data, { flag: 'a+' })
    console.log('File written succesfully')
  } catch (error) {
    console.log(error.message)
  }
}

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/posts',
  method: 'GET',
}

const request = https.request(options, (response) => {
  // Listening for 'data' Event
  response.on('data', (data) => {
    // Send data gotten to writeFileSync Function (writeJson(data))
    writeJson(data)
  })
})

// Listening for Error on request
request.on('error', (error) => {
  console.error('network', error.message)
})

// End request
request.end()

// writeJson({ name: 'tolu' })
