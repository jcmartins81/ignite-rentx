import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import 'reflect-metadata'
import swaggerUi from 'swagger-ui-express'
import createConnection from './database'
import router from './routes/index'
import swaggerFile from './swagger.json'
import connect from "./database";

const app = express()

connect()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

export default app
