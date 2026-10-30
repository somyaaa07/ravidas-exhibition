import { CalendarDays, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import { event } from '../../data/event'
import { images } from '../../data/images'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'

export default function Location() {
  const { t } = useLang(), l = ui.location
  const rows = [[CalendarDays, t(event.dates), t(event.time)], [MapPin, t(event.venue), t(event.address)], [Phone, event.phone, t(l.phoneNote)], [Mail, event.email, t(l.emailNote)]]
  return (<section id="contact" className="parchment py-14"><div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1fr_1fr_.8fr]">
    <img loading="lazy" src="https://i.pinimg.com/1200x/39/c6/38/39c638fd6bb4460d00c6c54a91269329.jpg" alt={t(l.alt)} className="w-full rounded-md shadow-lg h-80" />
    <div><h2 className="font-heading text-2xl text-primary">{t(l.title)}</h2>
      <ul className="mt-4 space-y-4 text-sm">{rows.map(([I, a, b]) => <li key={a} className="flex gap-3"><I className="shrink-0 text-secondary" size={20} /><div>{a}<br /><span className="text-xs text-muted">{b}</span></div></li>)}</ul></div>
    <div className="rounded-lg bg-border/30 p-6 text-center"><MapPin className="mx-auto text-secondary" /><p className="mt-2 font-medium">{t(event.venue)}</p><p className="text-xs text-muted">{t(event.city)}</p>
      <a href={event.mapUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-4">{t(l.map)} <ArrowRight size={16} /></a>
      <p className="mt-5 font-heading italic text-secondary">{t(l.quote)}</p></div>
  </div></section>)
}
