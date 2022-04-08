import dotenv from 'dotenv'
dotenv.config()

import { startServer } from './server/index.js'

try {
  startServer()
  console.log('🚀 Server running')
} catch (err) {
  console.log(`Fail to start server: ${err.message}`)
} 
