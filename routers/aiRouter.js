import express from 'express'
import { postAIGetPharse } from '../controllers/aiController.js'

const aiRouter = express.Router()

aiRouter.post('/getphrase', postAIGetPharse)

export default aiRouter