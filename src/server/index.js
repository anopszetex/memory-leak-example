import Events from 'events'
import { createServer } from 'http'
import { serverConfig } from './config.js'

const myEvent = new Events()
const TIMEOUT = 1500

function onData (date) {
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