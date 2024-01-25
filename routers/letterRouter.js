import {
    postReadLetter,
    postCreateLetter,
    postReadAllLetter,
} from '../controllers/letterController.js'

import express from 'express'

const letterRouter = express.Router()

letterRouter.post('/read', postReadLetter)
letterRouter.post('/readall', postReadAllLetter)
letterRouter.post('/create', postCreateLetter)

export default letterRouter
