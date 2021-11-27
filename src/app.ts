import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import {categoriesRoutes} from "./routes/categories.routes";
import specificationsRoutes from "./routes/specifications.routes";

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes)

export default app
