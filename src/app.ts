import cors from 'cors'
import express, { Request, Response } from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import 'reflect-metadata'
// eslint-disable-next-line import-helpers/order-imports
import swaggerUi from 'swagger-ui-express'
import connect from './database'
import { AppError } from './errors/AppError'
import router from './routes/index'
import swaggerFile from './swagger.json'

const app = express()

connect()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal Server error - ${err.message}`,
  })
})

export default app
