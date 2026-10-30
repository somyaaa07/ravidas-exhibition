import { CalendarDays, MapPin, Phone, Mail, ArrowRight, Check, Facebook, Instagram, Youtube } from 'lucide-react'
import * as Icons from 'lucide-react'
import { event } from '../../data/event'
import { images } from '../../data/images'

export default function Location() {
  const rows = [[CalendarDays, event.dates, event.time], [MapPin, event.venue, event.address], [Phone, event.phone, 'For stall bookings & queries'], [Mail, event.email, 'General inquiries']]
  return (<section id="contact" className="parchment py-14"><div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1fr_1fr_.8fr]">
    <img loading="lazy" src={images.location} alt="Varanasi ghats at sunset with boats" className="w-full rounded-md shadow-lg" />
    <div><h2 className="font-heading text-2xl text-primary">Event Location &amp; Details</h2>
      <ul className="mt-4 space-y-4 text-sm">{rows.map(([I, a, b]) => <li key={a} className="flex gap-3"><I className="shrink-0 text-secondary" size={20} /><div>{a}<br /><span className="text-xs text-muted">{b}</span></div></li>)}</ul></div>
    <div className="rounded-lg bg-border/30 p-6 text-center"><MapPin className="mx-auto text-secondary" /><p className="mt-2 font-medium">{event.venue}</p><p className="text-xs text-muted">{event.city}</p>
      <a href={event.mapUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-4">View on Map <ArrowRight size={16} /></a>
      <p className="mt-5 font-heading italic text-secondary">Let's come together to celebrate the message of Sant Ravidas Ji.</p></div>
  </div></section>)
}

const empty = { name: '', org: '', mobile: '', email: '', category: '', type: '', count: '1', notes: '' }
function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  if (!/^[6-9]\d{9}$/.test(v.mobile.replace(/[\s-]/g, '').replace(/^\+91/, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.category) e.category = 'Select a stall category.'
  if (!v.type) e.type = 'Select a stall or tent type.'
  if (!(+v.count >= 1 && +v.count <= 20)) e.count = 'Enter a number between 1 and 20.'
  return e
}
