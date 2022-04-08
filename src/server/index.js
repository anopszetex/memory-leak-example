import { createServer } from 'http'
import { serverConfig } from './config.js'

const startServer = () => {
  const server = createServer((request, response) => {
    response.end('hello')
  })

  server.listen(serverConfig.PORT)
}

export { startServer }