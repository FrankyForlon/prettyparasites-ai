'use client'

import { Menu } from 'lucide-react'

export function GlagoliticMenu() {
  return (
    <button
      onClick={() => alert('Menu coming soon — Tarot • Divination • Rasputin • Library • Store')}
      className="group flex h-16 w-16 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition hover:bg-white/10"
    >
      <Menu className="h-8 w-8 text-white/70 transition group-hover:text-white" />
      <span className="absolute -top-1 text-xs tracking-widest text-white/30">ⰳⰎⰰⰳⱁⰎⰹⱅⰹⱍⰰ</span>
    </button>
  )
}