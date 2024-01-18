import express from 'express'
import upload from '../upload.js'
import {
    postImageDelete,
    postImageUpload,
} from '../controllers/imageController.js'
const imageRouter = express.Router()

imageRouter.post('/upload', upload.single('avatar'), postImageUpload)
imageRouter.post('/delete', postImageDelete)

export default imageRouter
