import http from 'http'
import dotenv from 'dotenv'
import path from 'path'

import app from './app'

const { resolve, join } = path

dotenv.config({
  path: join(resolve(), './src/config/', '.env'),
})

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`)
})
