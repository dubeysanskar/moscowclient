'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

const quickReplies = [
    'What services do you offer?',
    'How fast is deployment?',
    'Which countries do you serve?',
    'I want to hire workers',
]

function renderMarkdown(text) {
    if (!text) return ''
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^- (.*)/gm, '<li>$1</li>')
        .replace(/\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>')
    html = html.replace(/(<li>.*?<\/li>(\s*<br\/>)?)+/gs, (match) => '<ul>' + match.replace(/<br\/>/g, '') + '</ul>')
    return html
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm the Taha Airwaves assistant. How can I help you today? Whether you're an employer looking for manpower or a job seeker, I'm here to guide you." },
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const endRef = useRef(null)

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

    const send = async (text) => {
        const msg = text || input.trim()
        if (!msg) return
        setInput('')
        setMessages(prev => [...prev, { role: 'user', content: msg }])
        setLoading(true)
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, { role: 'user', content: msg }] }),
            })
            const data = await res.json()
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply || "Sorry, I couldn't process that. Please call +91 93152 26961." }])
        } catch {
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting. Please reach us at +91 93152 26961 or info@tahaairwaves.com." }])
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {/* Toggle */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-xl text-white shadow-lg cursor-pointer"
                style={{ background: '#8E0935' }}
                aria-label={isOpen ? 'Close chat' : 'Open chat'}
            >
                {isOpen ? <FiX /> : <FiMessageCircle />}
                {!isOpen && <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: '#BC264B' }} />}
            </motion.button>

            {!isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="fixed bottom-8 right-22 z-50 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shadow-md"
                    style={{ background: '#1a0a10', color: '#FDFBEF', fontFamily: 'var(--font-lato)' }}
                    onClick={() => setIsOpen(true)}
                >
                    Ask Taha AI
                </motion.div>
            )}

            {/* Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                        style={{ maxHeight: '520px', border: '1px solid rgba(142,9,53,0.15)', background: '#FDFBEF' }}
                    >
                        {/* Header */}
                        <div className="p-4 flex items-center gap-3" style={{ background: '#8E0935' }}>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                            <div className="flex-1">
                                <div className="text-sm font-bold" style={{ color: '#FDFBEF', fontFamily: 'var(--font-lato)' }}>Taha Airwaves</div>
                                <div className="text-xs" style={{ color: 'rgba(253,251,239,0.6)', fontFamily: 'var(--font-poppins)' }}>AI Assistant • Online</div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white cursor-pointer"><FiX /></button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: '320px' }}>
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm" style={{
                                        background: m.role === 'user' ? '#8E0935' : '#fff',
                                        color: m.role === 'user' ? '#FDFBEF' : '#374151',
                                        fontFamily: 'var(--font-poppins)',
                                        border: m.role === 'user' ? 'none' : '1px solid rgba(142,9,53,0.1)',
                                    }}>
                                        {m.role === 'assistant'
                                            ? <span dangerouslySetInnerHTML={{ __html: renderMarkdown(m.content) }} />
                                            : m.content}
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="px-4 py-3 rounded-2xl bg-white flex gap-1.5" style={{ border: '1px solid rgba(142,9,53,0.1)' }}>
                                        {[0, 1, 2].map(j => (
                                            <div key={j} className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#BC264B', animationDelay: `${j * 0.15}s` }} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={endRef} />
                        </div>

                        {/* Quick Replies */}
                        {messages.length <= 2 && (
                            <div className="px-4 pb-2 flex flex-wrap gap-2">
                                {quickReplies.map(qr => (
                                    <button key={qr} onClick={() => send(qr)}
                                        className="text-xs px-3 py-1.5 rounded-full cursor-pointer transition-colors hover:bg-[#8E0935] hover:text-white"
                                        style={{ background: 'rgba(142,9,53,0.08)', color: '#8E0935', fontFamily: 'var(--font-lato)' }}>
                                        {qr}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 flex gap-2" style={{ borderTop: '1px solid rgba(142,9,53,0.1)' }}>
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), send())}
                                placeholder="Type a message..."
                                disabled={loading}
                                className="flex-1 px-4 py-2.5 rounded-full text-sm outline-none"
                                style={{ background: '#fff', border: '1px solid rgba(142,9,53,0.1)', fontFamily: 'var(--font-poppins)', color: '#1a0a10' }}
                            />
                            <button onClick={() => send()} disabled={loading || !input.trim()}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer disabled:opacity-50"
                                style={{ background: '#8E0935' }}>
                                <FiSend className="text-sm" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
