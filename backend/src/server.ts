import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import { router } from './routes'
import cors from 'cors'

const app = express()
app.use(cors())

import './database'

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.use(router)

app.listen(4040, () => console.log('Server is runnning, port: 4040'))
