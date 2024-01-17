import express from 'express'
import cors from 'cors'

const PORT = 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(PORT, () => {
    console.log(`tlqqkf connecftiontionasno ${PORT}`)
})
