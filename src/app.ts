import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/index'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

export default app
