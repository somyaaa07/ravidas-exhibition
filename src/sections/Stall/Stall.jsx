import { CalendarDays, MapPin, Phone, Mail, ArrowRight, Check, Facebook, Instagram, Youtube } from 'lucide-react'
import * as Icons from 'lucide-react'
import { images } from '../../data/images'
import { facilities } from '../../data/content'
import { Lotus } from '../../components/decor/Lotus'
import Reveal from '../../components/animation/Reveal'

export default function Stall() {
  return (<section id="stall" className="relative overflow-hidden parchment py-16"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
    <Reveal><p className="text-xs tracking-widest text-secondary">BOOK YOUR SPACE</p>
      <h2 className="font-heading text-5xl text-primary">Set Up Your Stall or Tent</h2>
      <h3 className="mt-2 font-heading text-xl text-dark">Be a part of this meaningful event.</h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">Individuals, artisans, NGOs, food vendors, businesses and social organizations are invited to apply — handicrafts, clothing, books, educational displays, food, cultural products and community organizations.</p>
      <ul className="mt-5 space-y-2 text-sm">{facilities.map(f => <li key={f} className="flex items-center gap-3"><span className="grid h-5 w-5 place-items-center rounded-full bg-secondary text-white"><Check size={12} /></span>{f}</li>)}</ul>
      <a href="#register" className="btn btn-primary mt-7">Register for Stall / Tent <ArrowRight size={16} /></a></Reveal>
    <Reveal delay={.1} className="relative"><img loading="lazy" src={images.stall} alt="Visitors browsing handicraft stalls under white tents" className="w-full rounded-lg shadow-2xl" />
      <Lotus className="pointer-events-none absolute -bottom-10 -left-10 hidden h-44 w-44 text-border sm:block lg:-left-52" sw={.8} />
      <p className="mt-3 text-right font-heading italic text-secondary">Showcase Your Work — Be a Part of Something Meaningful</p></Reveal>
  </div></section>)
}
