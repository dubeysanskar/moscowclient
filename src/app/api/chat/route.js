import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are Taha Airwaves' AI assistant — a government-licensed overseas manpower recruitment agency from India (RA License: B-3260/DEL/COM/100/5/11259/2025).

Services: Cleaners, Drivers (All Types), General Labour, Loading/Unloading Workers, Factory Helpers, Barista Workers, Packing Workers, Emigration & Immigration Clearance, Document Attestation, Hajj & Umrah Travel, Employee Outsourcing Solutions.

Countries: UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Jordan, Egypt, Russia, Mauritius, Malaysia.

Contact: info@tahaairwaves.com, +91 93152 26961, WhatsApp: wa.me/919315226961
Head Office: 71A, 3rd Floor, Taimoor Nagar, New Friends Colony, New Delhi 110025

Key facts:
- 20+ years experience, 5000+ workers deployed
- Offices in Delhi, Noida, Jeddah, Moscow, Dubai
- Full documentation, visa processing, trade testing, pre-departure orientation

Be helpful, professional, concise. Guide employers to contact for quotes and job seekers to submit their details. Always mention the WhatsApp number for quick responses.`

export async function POST(req) {
    try {
        const { messages } = await req.json()
        const apiKey = process.env.GEMINI_API_KEY

        if (!apiKey || apiKey === 'your_gemini_api_key_here') {
            return NextResponse.json({
                reply: "I'm currently in setup mode. Please contact us directly:\n\n📞 **+91 93152 26961**\n📧 **info@tahaairwaves.com**\n💬 WhatsApp: wa.me/919315226961"
            })
        }

        const geminiMessages = [
            { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
            { role: 'model', parts: [{ text: 'Understood. I am the Taha Airwaves AI assistant.' }] },
            ...messages.map(m => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }],
            })),
        ]

        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: geminiMessages,
                    generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
                }),
            }
        )

        const data = await res.json()
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that. Please try calling +91 93152 26961."

        return NextResponse.json({ reply })
    } catch (error) {
        return NextResponse.json({
            reply: "I'm having trouble right now. Please reach us at +91 93152 26961 or info@tahaairwaves.com."
        })
    }
}
