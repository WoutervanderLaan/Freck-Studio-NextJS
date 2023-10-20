import formData from 'form-data'
import Mailgun from 'mailgun.js'
import { NextRequest, NextResponse } from 'next/server'

const EMAIL_W = process.env.MAILGUN_EMAIL_W
const EMAIL_S = process.env.MAILGUN_EMAIL_S

const API_KEY = process.env.MAILGUN_API_KEY
const DOMAIN = process.env.MAILGUN_DOMAIN

export async function POST(request: NextRequest) {
    const { firstName, lastName, company, email, message } =
        await request.json()

    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
        username: EMAIL_W!,
        key: API_KEY!,
    })

    try {
        const msg = await mg.messages.create(DOMAIN!, {
            from: `${firstName} ${lastName} / ${company} <contact@canvasheroes.com>`,
            to: [EMAIL_W!, EMAIL_S!],
            subject: 'Message from Freck Studio Contact Form',
            text: `${message} | <${email}>`,
        })
        return NextResponse.json({
            status: 200,
            body: {
                message: 'Successfully forwarded message!',
                ...msg,
            },
        })
    } catch (err) {
        return NextResponse.json(err)
    }
}
