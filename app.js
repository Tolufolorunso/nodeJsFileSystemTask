const { writeFileSync } = require('fs')
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
  response.on('data', (data) => {
    writeJson(data)
  })
})

request.on('error', (error) => {
  console.error('network', error.message)
})

request.end()

// writeJson({ name: 'tolu' })
