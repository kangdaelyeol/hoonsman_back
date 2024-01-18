import { postReadScene, postCreateScene } from '../controllers/sceneController.js'

import express from 'express'

const sceneRouter = express.Router()

sceneRouter.post('/read', postReadScene)
sceneRouter.post('/create', postCreateScene)

export default sceneRouter
