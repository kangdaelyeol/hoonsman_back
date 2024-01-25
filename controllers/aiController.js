import dotenv from 'dotenv'
import OpenAI from 'openai'
dotenv.config()

export const postAIGetPharse = async (req, res, next) => {
    try {
        const { keywords } = req.body

        const openai = new OpenAI({
            apiKey: process.env.OPEN_AI_KEY,
        })

        const phraseNum = 10

        const messages = [
            {
                role: 'user',
                content: `
                  keywords = ${keywords}.
                  Please write it in KOREAN ONLY.

                  I want to get some help in writing a phrase for the invitation.
                  After looking at the theme and keywords provided, please recommend ${phraseNum} phrases that match well.
                  Do not provide additional translations in English.
                  I will use what you give me as a data in program, so you should give response as a format of array to me.
                  Please provide it as is without line breaks.
              `,
            },
        ]

        const params = {
            messages: messages,
            model: 'gpt-4',
        }

        const chatCompletion = await openai.chat.completions.create(params)

        const content = JSON.parse(chatCompletion.choices[0].message.content)

        return res.status(200).json({ status: true, data: content })
    } catch (e) {
        console.log(e)
        return res.status(400).json({
            error: e,
            status: false,
        })
    }
}
