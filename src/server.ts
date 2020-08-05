import express from 'express'
import routes from './routes'
import cors from 'cors'
import path from 'path'
// import custom from 'custom-env'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(8000)
