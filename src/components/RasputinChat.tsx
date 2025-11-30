'use client'

import { useState } from 'react'

export function RasputinChat() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg = input
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setInput('')
    setLoading(true)

    const res = await fetch('/api/rasputin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMsg }),
    })

    const data = await res.json()
    setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-white/20 bg-black/40 p-8 backdrop-blur">
        {messages.length === 0 ? (
          <p className="text-center text-2xl opacity-70">
            The Siberian mystic awaits your question…
          </p>
        ) : (
          messages.map((m, i) => (
            <div
              key={i}
              className={`mb-6 ${m.role === 'assistant' ? 'text-left' : 'text-right'}`}
            >
              <p
                className={`inline-block rounded-lg px-6 py-4 ${
                  m.role === 'assistant'
                    ? 'bg-white/10 text-white'
                    : 'bg-white text-black'
                }`}
              >
                {m.content}
              </p>
            </div>
          ))
        )}
        {loading && <p className="text-center italic">Rasputin is gazing into the void…</p>}
      </div>

      <div className="flex gap-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask Rasputin about love, death, or parasites…"
          className="flex-1 rounded-none border-b-2 border-white bg-transparent px-0 text-xl outline-none placeholder:text-white/50"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="px-8 py-4 uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black disabled:opacity-50"
        >
          Consult
        </button>
      </div>
    </div>
  )
}