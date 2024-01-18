import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { cloudinaryUpload, cloudinaryDestroy } from '../cloudinary.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const postImageUpload = async (req, res, next) => {
    console.log(req.file, req.body)
    try {
        const srcPath = await cloudinaryUpload(req.file)

        return res.status(200).json({ status: true, data: srcPath })
    } catch (e) {
        return res
            .status(400)
            .json({ status: false, message: '무사 안되맨', error: e })
    }
}
export const postImageDelete = async (req, res, next) => {
    const { fileUrl, fileNameForCloudinary } = req.body
    const fileName = path.basename(fileUrl)
    const deletePath = path.resolve(__dirname, '..', 'uploads', fileName)
    try {
        fs.existsSync(deletePath) && fs.unlinkSync(deletePath)
        const destoryResult = await cloudinaryDestroy(fileNameForCloudinary)
        console.log(destoryResult)
        return res.status(200)
    } catch (e) {
        return res.status(400).json({
            status: false,
            message: '무사 지우기 안되맨?',
            error: e,
        })
    }
}
