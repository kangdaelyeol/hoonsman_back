import Letter from '../mongo/model/letter.js'

export const postCreateLetter = async (req, res, next) => {
    const letterData = req.body

    const letter = {}
    Object.keys(letterData).forEach((k) => {
        if (k === 'type') return
        letter[k] = letterData[k]
    })
    const letterid = 'S' + Date.now()
    const newLetter = {
        type: letterData.type,
        letterid,
        letter,
    }

    try {
        const result = await Letter.create(newLetter)
        console.log(result)
        return res.status(200).json(result)
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            status: false,
            message: '홀리리리싯',
            error: e,
        })
    }
}

export const postReadLetter = async (req, res, next) => {
    const { letterid } = req.body

    try {
        const letterData = await Letter.findOne({ letterid })
        const { type, letter } = letterData
        const newLetter = {
            type,
            ...letter,
        }

        return res.status(200).json({ status: true, data: newLetter })
    } catch (e) {
        return res
            .status(400)
            .json({ status: false, message: '홀리리리싯', error: e })
    }
}
