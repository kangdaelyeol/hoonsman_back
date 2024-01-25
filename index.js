import express from 'express'
import cors from 'cors'
import imageRouter from './routers/imageRouter.js'
import letterRouter from './routers/letterRouter.js'
import aiRouter from './routers/aiRouter.js'

import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import './mongo/mongodb.js'

const PORT = process.env.PORT || 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/uploads', express.static(join(__dirname, 'uploads')))
app.use('/default', express.static(join(__dirname, 'default')))
app.use('/letter', letterRouter)
app.use('/image', imageRouter)
app.use('/ai', aiRouter)

app.get('/*', (req, res, next) => {
    res.end()
})

app.listen(PORT, () => {
    console.log(`tlqqkf connecftiontionasno ${PORT}`)
})
