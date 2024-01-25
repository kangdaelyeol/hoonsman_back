import mongoose from 'mongoose'

const { Schema } = mongoose

const letterSchema = new Schema({
    letterid: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    letter: {
        type: Object,
        required: true,
    },
})

export default mongoose.model.letter || mongoose.model('Letter', letterSchema)
