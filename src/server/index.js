import Events from 'node:events'
import { randomBytes } from 'node:crypto'
import { createServer } from 'node:http'
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
  if (request.url === '/leak') {
    myEvent.emit('data', Date.now())
    response.end('leaking handler executed')
    return
  }

  getBytes()
  response.end('safe handler executed')
}

const startServer = (port = serverConfig.PORT) => {
  const server = createServer(handler)

  server.listen(port)
  return server
}

export { handler, startServer }
