import { CalendarDays, MapPin, Phone, Mail, ArrowRight, Check, Facebook, Instagram, Youtube } from 'lucide-react'
import * as Icons from 'lucide-react'
import { event } from '../../data/event'
import { images } from '../../data/images'

export default function Hero() {
  return (<section id="home" className="relative overflow-hidden parchment">
    <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 pt-10 lg:grid-cols-[1fr_1.1fr] lg:pt-0">
      <div className="relative z-10 py-8 lg:py-16">
        <p className="mb-3 text-xs tracking-[.2em] text-secondary">FAITH &nbsp;|&nbsp; EQUALITY &nbsp;|&nbsp; HUMANITY</p>
        <h1 className="font-heading text-5xl leading-[1.05] text-primary sm:text-6xl">Sant Ravidas Ji<br />Exhibition</h1>
        <h2 className="mt-5 font-heading text-2xl leading-snug text-dark">Celebrating the Life, Teachings &amp; Timeless Vision of Sant Ravidas Ji</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">An inspiring exhibition to pay tribute to the great saint, philosopher and social reformer — whose message of equality, devotion, humanity and social harmony continues to light the way for a better world.</p>
        <div className="mt-6 flex flex-wrap gap-8 text-sm">
          <div className="flex gap-3"><CalendarDays className="text-secondary" /><div><b className="font-medium">{event.dates}</b><br /><span className="text-muted">{event.time}</span></div></div>
          <div className="flex gap-3"><MapPin className="text-secondary" /><div><b className="font-medium">{event.venue}</b><br /><span className="text-muted">{event.city}</span></div></div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#register" className="btn btn-primary">Book Your Stall / Tent <ArrowRight size={16} /></a>
          <a href="#exhibition" className="btn btn-ghost">Explore Exhibition <ArrowRight size={16} /></a></div>
      </div>
      <div className="relative -mx-5 lg:mx-0">
        <img src={images.hero} alt="Sant Ravidas Ji seated beside the Ganga ghats of Varanasi" className="h-full max-h-[34rem] w-full object-cover object-top lg:max-h-none [mask-image:linear-gradient(to_right,transparent,#000_22%)]" />
      </div>
    </div></section>)
}
