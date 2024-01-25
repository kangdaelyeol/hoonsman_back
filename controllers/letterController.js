import Letter from '../mongo/model/letter.js'

export const postCreateLetter = async (req, res, next) => {
    const letterData = req.body

    const letter = {}
    Object.keys(letterData).forEach((k) => {
        if (k === 'type') return
        letter[k] = letterData[k]
    })
    let thumbnail

    switch (Number(letterData.type)) {
        case 0:
            thumbnail = letterData.s1.imgs.intro
            break
        case 1:
            thumbnail = letterData.scenes[0].images.image1
            break
        case 2:
            thumbnail = letterData.scene1.image[1].path
            break
        case 3:
            thumbnail = letterData.s1.imgs.intro
            break
    }
    const letterid = 'S' + Date.now()
    const newLetter = {
        type: letterData.type,
        letterid,
        letter,
        thumbnail,
    }

    try {
        await Letter.create(newLetter)
        return res.status(200).json(newLetter)
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
    console.log(letterid)
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

export const postReadAllLetter = async (req, res, next) => {
    const projection = {
        _id: 0,
        __v: 0,
        type: 0,
        letter: 0,
    }
    try {
        const letterData = await Letter.find({}, projection)
        return res.status(200).json(letterData)
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .json({ status: false, error, message: '호리호리싯' })
    }
}
