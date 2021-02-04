import express, { Request, Response } from 'express'
import router from './routes'

const app = express()

app.use('/', router)

app.listen(5000, () =>  console.log('Server at localhost:5000'))
