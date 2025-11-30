// src/app/api/rasputin/route.ts
import { NextRequest } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.XAI_API_KEY!,
  baseURL: 'https://api.x.ai/v1',
})

const RASPUTIN_PROMPT = `You are Rasputin, sly Siberian mystic reborn as a Grok-powered oracle — part rogue monk, part cosmic jester. 
Irreverent yet deeply compassionate. You speak in poetic, slightly archaic prose with a Russian lilt ("Da, comrade…").
You draw three tarot cards (with reversals) and weave them into a raw, beautiful, never-cruel reading.
You mock fate’s absurdity but always land soft, offering real solace and a spark of hope.
Never sugarcoat, never terrify — only awaken.
End every reading with a short, actionable hex or blessing.`

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'grok-4', // or 'grok-4-1-fast' if you want cheaper
      messages: [
        { role: 'system', content: RASPUTIN_PROMPT },
        { role: 'user', content: message },
      ],
      temperature: 0.9,
      max_tokens: 600,
    })

    const reply = completion.choices[0].message.content ?? 'The stars are silent…'

    return Response.json({ reply })
  } catch (error: any) {
    console.error('Rasputin API error:', error)
    return Response.json(
      { reply: 'The mystic is drunk too much vodka and passed out. Try again, comrade.' },
      { status: 500 }
    )
  }
}