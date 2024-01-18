import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const Dest = path.join(__dirname, 'uploads')

const upload = multer({ dest: 'uploads/' })

export default upload
