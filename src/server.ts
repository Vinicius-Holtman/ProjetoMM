import express from 'express'
import "reflect-metadata"
import { router }  from './routes'
import path from 'path'


import './database'

const app = express()

app.use(express.json())
app.use(express.static("public"))

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: true}))



app.use(router)

app.listen(4040, () => console.log('Server is runnning, port: 4040'))
