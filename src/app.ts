import cors from 'cors'
import express, {NextFunction, Request, Response} from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import 'reflect-metadata'
import swaggerUi from 'swagger-ui-express'

import connect from './database'
import router from './routes/index'
import swaggerFile from './swagger.json'
import {AppError} from "./errors/AppError";


const app = express()

connect()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Internal Server error - ${err.message}`
    })
})

export default app
