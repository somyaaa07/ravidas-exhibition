import { Check, Phone, Mail } from 'lucide-react'
import { benefits, howItWorks } from '../../data/registration'
import { event } from '../../data/event'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import { Lotus } from '../../components/decor/Lotus'

export default function RegistrationSidebar() {
  const { t } = useLang(), r = ui.reg
  return (<aside className="relative overflow-hidden bg-gradient-to-b from-primary to-dark p-8 text-[#F5EBDD] sm:p-10">
    <Lotus className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 text-secondary/40" sw={.8} />
    <div className="relative">
      <h3 className="font-heading text-2xl">{t(r.why)}</h3>
      <ul className="mt-4 space-y-3 text-sm">{benefits.map(b => <li key={b.en} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-secondary" />{t(b)}</li>)}</ul>
      <h3 className="mt-9 font-heading text-2xl">{t(r.how)}</h3>
      <ol className="mt-4 space-y-4 text-sm">{howItWorks.map(([h, d], i) => <li key={h.en} className="flex gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-secondary text-xs">{i + 1}</span><div><b className="font-medium">{t(h)}</b><p className="text-xs opacity-75">{t(d)}</p></div></li>)}</ol>
      <div className="mt-9 space-y-2 border-t border-secondary/40 pt-5 text-sm">
        <p className="text-xs opacity-75">{t(r.talk)}</p>
        <a href={`tel:${event.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-secondary"><Phone size={16} />{event.phone}</a>
        <a href={`mailto:${event.email}`} className="flex items-center gap-2 hover:text-secondary"><Mail size={16} />{event.email}</a></div>
    </div></aside>)
}
