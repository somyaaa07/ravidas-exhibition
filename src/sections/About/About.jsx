import { CalendarDays, MapPin, Phone, Mail, ArrowRight, Check, Facebook, Instagram, Youtube } from 'lucide-react'
import * as Icons from 'lucide-react'
import { images } from '../../data/images'
import { pillars } from '../../data/content'
import Reveal from '../../components/animation/Reveal'

export default function About() {
  return (<section id="about" className="parchment py-16"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_.9fr_.8fr]">
    <Reveal><p className="text-xs tracking-widest text-secondary">ABOUT</p>
      <h2 className="font-heading text-5xl text-primary">Sant Ravidas Ji</h2>
      <h3 className="mt-2 font-heading text-xl text-dark">A Saint, A Reformer, A Beacon of Equality</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">Sant Ravidas Ji (15th century), a revered saint, poet and philosopher of the Bhakti tradition, was a strong voice for social equality, humanity and inner devotion. Born in Varanasi, he dedicated his life to removing the barriers of caste and discrimination, and envisioned Begampura — a city free from sorrow and injustice. His teachings inspire people to live with kindness, humility and love for all.</p>
      <a href="#exhibition" className="btn btn-primary mt-6">Know More About Sant Ravidas Ji <ArrowRight size={16} /></a></Reveal>
    <Reveal delay={.1}><img loading="lazy" src={images.about} alt="Portrait of Sant Ravidas Ji" className="mx-auto w-full max-w-sm rounded-md shadow-xl" /></Reveal>
    <Reveal delay={.2} className="space-y-6">{pillars.map(([t, d], i) => { const I = [Icons.Scale, Icons.Flower2, Icons.Landmark][i]
      return (<div key={t} className="flex gap-4"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-secondary text-secondary"><I size={22} /></span>
        <div><h4 className="font-heading text-lg text-primary">{t}</h4><p className="text-xs text-muted">{d}</p></div></div>) })}</Reveal>
  </div></section>)
}
