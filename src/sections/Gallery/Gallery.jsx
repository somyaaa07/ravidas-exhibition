import { CalendarDays, MapPin, Phone, Mail, ArrowRight, Check, Facebook, Instagram, Youtube } from 'lucide-react'
import * as Icons from 'lucide-react'
import { gallery } from '../../data/images'

export default function Gallery() {
  return (<section id="gallery" className="bg-gradient-to-b from-primary to-dark py-12 text-[#F5EBDD]"><div className="mx-auto max-w-7xl px-5">
    <div className="flex flex-wrap items-end justify-between gap-3"><div>
      <h2 className="font-heading text-3xl">Exhibition Experience</h2><p className="text-sm opacity-80">A glimpse of the devotion, culture and community spirit. (Illustrative images)</p></div>
      <a href="#gallery" className="btn border border-secondary">View Gallery <ArrowRight size={16} /></a></div>
    <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-3">{gallery.map(g => <img key={g.alt} loading="lazy" src={g.src} alt={g.alt} className="h-40 w-64 shrink-0 snap-start rounded-lg border border-secondary object-cover" />)}</div>
  </div></section>)
}
