import { CalendarDays, MapPin, Phone, Mail, ArrowRight, Check, Facebook, Instagram, Youtube } from 'lucide-react'
import * as Icons from 'lucide-react'
import { features } from '../../data/content'
import { Temple } from '../../components/decor/Temple'
import Reveal from '../../components/animation/Reveal'

export default function Exhibition() {
  return (<section id="exhibition" className="relative overflow-hidden bg-background py-16">
    <Temple className="pointer-events-none absolute -left-4 top-8 h-56 text-border sm:left-8" />
    <div className="relative mx-auto max-w-7xl px-5">
      <Reveal className="text-center"><p className="text-xs tracking-widest text-secondary">THE EXHIBITION</p>
        <h2 className="font-heading text-4xl text-primary">About the Exhibition</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted">A unique platform to celebrate Sant Ravidas Ji's teachings through exhibitions, cultural programs and community participation.</p></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{features.map(([t, d, ic], i) => { const I = Icons[ic]
        return (<Reveal key={t} delay={i * .06}><div className="card h-full p-6 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-border/40 text-primary"><I size={28} strokeWidth={1.4} /></span>
          <h3 className="mt-4 font-heading text-lg text-primary">{t}</h3><p className="mt-2 text-xs leading-relaxed text-muted">{d}</p></div></Reveal>) })}</div>
    </div></section>)
}
