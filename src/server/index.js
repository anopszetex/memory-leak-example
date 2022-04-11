import Events from 'events'
import { randomBytes } from 'crypto'
import { createServer } from 'http'
import { serverConfig } from './config.js'

const TIMEOUT = 1500
const SIZE = 10000

const myEvent = new Events()

function getBytes() {
  return randomBytes(SIZE)
}

function onData (date) {
  getBytes()

  const items = []
  
  setInterval(function myInterval () {
    items.push(date)
  }, TIMEOUT)
}

myEvent.on('data', onData)

function handler (request, response) {
  myEvent.emit('data', Date.now())

  response.end('hello')
}

const startServer = () => {
  const server = createServer(handler)

  server.listen(serverConfig.PORT)
}

export { startServer }