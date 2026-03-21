import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const { name, email, phone, service, message } = await req.json()

        const smtpHost = process.env.SMTP_HOST
        const smtpUser = process.env.SMTP_USER
        const smtpPass = process.env.SMTP_PASS
        const contactEmail = process.env.CONTACT_EMAIL || 'info@tahaairwaves.com'

        if (!smtpHost || !smtpUser || !smtpPass || smtpUser === 'your_email@gmail.com') {
            console.log('Contact form submission (SMTP not configured):', { name, email, phone, service, message })
            return NextResponse.json({ success: true, message: 'Message received (dev mode)' })
        }

        // Dynamic import to avoid issues if nodemailer not installed
        const nodemailer = (await import('nodemailer')).default

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: { user: smtpUser, pass: smtpPass },
        })

        await transporter.sendMail({
            from: `"Taha Airwaves Website" <${smtpUser}>`,
            to: contactEmail,
            replyTo: email,
            subject: `New Contact: ${name} — ${service || 'General Inquiry'}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        })

        return NextResponse.json({ success: true, message: 'Email sent successfully' })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 })
    }
}
