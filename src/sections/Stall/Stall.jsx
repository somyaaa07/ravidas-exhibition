import { ArrowRight, Check } from 'lucide-react'
import { images } from '../../data/images'
import { facilities } from '../../data/content'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import { Lotus } from '../../components/decor/Lotus'
import Reveal from '../../components/animation/Reveal'

export default function Stall() {
  const { t } = useLang(), s = ui.stall
  return (<section id="stall" className="relative overflow-hidden parchment py-16"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
    <Reveal><p className="text-xs tracking-widest text-secondary">{t(s.label)}</p>
      <h2 className="font-heading text-5xl text-primary">{t(s.title)}</h2>
      <h3 className="mt-2 font-heading text-xl text-dark">{t(s.sub)}</h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{t(s.body)}</p>
      <ul className="mt-5 space-y-2 text-sm">{facilities.map(f => <li key={f.en} className="flex items-center gap-3"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-secondary text-white"><Check size={12} /></span>{t(f)}</li>)}</ul>
      <a href="#register" className="btn btn-primary mt-7">{t(s.cta)} <ArrowRight size={16} /></a></Reveal>
    <Reveal delay={.1} className="relative"><img loading="lazy" src={images.stall} alt={t(s.alt)} className="w-full rounded-lg shadow-2xl" />
      <Lotus className="pointer-events-none absolute -bottom-10 -left-10 hidden h-44 w-44 text-border sm:block lg:-left-52" sw={.8} />
      <p className="mt-3 text-right font-heading italic text-secondary">{t(s.tagline)}</p></Reveal>
  </div></section>)
}
