import express from 'express'
import upload from '../upload'
const imageRouter = express.Router()

imageRouter.post('/upload', upload.single('avatar'), postImageUploadTemp)
imageRouter.post('/delete', postImageDeleteTemp)
