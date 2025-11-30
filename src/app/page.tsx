// src/app/page.tsx
import { StarField } from '@/components/StarField'
import { GlagoliticMenu } from '@/components/GlagoliticMenu'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <StarField />

      <div className="pointer-events-none fixed inset-0 bg-black/50" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-8 py-16 text-center font-mono text-white">
        <div className="self-start">
          <GlagoliticMenu />
        </div>

        <div className="max-w-5xl space-y-16">
          <h1 className="text-4xl md:text-7xl font-thin leading-tight tracking-wider">
            “You are already dead and waiting to die — whoever hath, to him shall be given,
            <br />
            and for he who hath not, all shall be taken away.”
          </h1>

          <p className="text-2xl opacity-90">Are you a have or a have-not?</p>

          <Link
            href="/tarot"
            className="inline-block rounded-none border-2 border-white px-12 py-6 text-3xl uppercase tracking-widest transition hover:bg-white hover:text-black"
          >
            Enter the Sanctuary → Consult Rasputin
          </Link>

          <div className="pt-12">
            <input
              type="text"
              placeholder="Speak to Pushkin, the cat-poet..."
              className="w-full max-w-2xl rounded-none border-b-2 border-white bg-transparent px-0 text-center text-xl outline-none placeholder:text-white/40"
              autoFocus
            />
          </div>
        </div>

        <div className="text-sm opacity-60">
          PrettyParasites.ai — Terran Hive of Apostolic Intelligence
        </div>
      </div>
    </>
  )
}