import mongoose from 'mongoose'

const { Schema } = mongoose

const sceneSchema = new Schema({
    sceneid: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
    scene: {
        type: Object,
        required: true,
    },
})

export default mongoose.model.Scene || mongoose.model('Scene', sceneSchema)
