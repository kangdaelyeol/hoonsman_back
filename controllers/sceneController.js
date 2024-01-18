import Scene from '../mongo/model/scene.js'

export const postCreateScene = async (req, res, next) => {
    const { sceneData } = req.body
    const scene = {}
    Object.keys(sceneData).forEach((k) => {
        if (k === 'type') return
        scene[k] = sceneData[k]
    })
    const sceneid = 'S_' + Date.now()
    const newScene = {
        type: sceneData.type,
        sceneid,
        scene,
    }

    try {
        const result = await Scene.create(newScene)
    } catch (e) {
        return res.status(400).json({
            status: false,
            message: '홀리리리싯',
            error: e,
        })
    }
}

export const postReadScene = async (req, res, next) => {
    const { sceneid } = req.body

    try {
        const sceneData = await Scene.findOne({ sceneid })
        const { type, scene } = sceneData
        const newScene = {
            type,
            ...scene,
        }

        return res.status(200).json({ status: true, data: newScene })
    } catch (e) {
        return res
            .status(400)
            .json({ status: false, message: '홀리리리싯', error: e })
    }
}
