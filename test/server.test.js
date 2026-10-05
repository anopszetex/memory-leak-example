import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'

import { startServer } from '../src/server/index.js'

let server
let url

before(async () => {
  server = startServer(0)
  await new Promise(resolve => server.once('listening', resolve))
  url = `http://127.0.0.1:${server.address().port}`
})

after(async () => {
  await new Promise((resolve, reject) => {
    server.close(error => (error ? reject(error) : resolve()))
  })
})

test('the control endpoint responds without creating retained intervals', async () => {
  const response = await fetch(`${url}/safe`)

  assert.equal(response.status, 200)
  assert.equal(await response.text(), 'safe handler executed')
})
