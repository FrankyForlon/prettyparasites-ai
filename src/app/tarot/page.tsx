// src/app/tarot/page.tsx
import { RasputinChat } from '@/components/RasputinChat'
import { StarField } from '@/components/StarField'
import Link from 'next/link'

export default function Tarot() {
  return (
    <>
      <StarField />

      <div className="relative z-10 min-h-screen px-8 py-16 text-white">
        <Link href="/" className="absolute left-8 top-8 text-white/70 hover:text-white">
          ← Back to the Void
        </Link>

        <div className="mx-auto max-w-4xl pt-32">
          <h1 className="mb-12 text-center text-6xl font-thin tracking-widest">
            Rasputin Reads Your Fate
          </h1>

          <RasputinChat />
        </div>
      </div>
    </>
  )
}