import express from 'express'
import "reflect-metadata"
import { router }  from './routes'

import './database'

const app = express()

app.use(express.json())

app.use(router)

app.listen(4040, () => console.log('server only. PORT:4040'))
