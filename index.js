import express from 'express'
import cors from 'cors'
import imageRouter from './routers/imageRouter.js'
import sceneRouter from './routers/sceneRouter.js'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const PORT = 8000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/uploads', express.static(join(__dirname, 'uploads')))
app.use('/scene', sceneRouter)
app.use('/image', imageRouter)

app.get('/*', (req, res, next) => {
    res.end()
})

app.listen(PORT, () => {
    console.log(`tlqqkf connecftiontionasno ${PORT}`)
})
