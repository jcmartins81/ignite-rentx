import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/index'
import swaggerUi from  'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

export default app
