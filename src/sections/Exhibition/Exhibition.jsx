import * as Icons from 'lucide-react'
import { features } from '../../data/content'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import { Temple } from '../../components/decor/Temple'
import Reveal from '../../components/animation/Reveal'

export default function Exhibition() {
  const { t } = useLang(), x = ui.exhibition
  return (<section id="exhibition" className="relative overflow-hidden bg-background py-16">
    <Temple className="pointer-events-none absolute -left-4 top-8 h-56 text-border sm:left-8" />
    <div className="relative mx-auto max-w-7xl px-5">
      <Reveal className="text-center"><p className="text-xs tracking-widest text-secondary">{t(x.label)}</p>
        <h2 className="font-heading text-4xl text-primary">{t(x.title)}</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-muted">{t(x.sub)}</p></Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{features.map((f, i) => { const I = Icons[f.icon]
        return (<Reveal key={f.title.en} delay={i * .06}><div className="card h-full p-6 text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-border/40 text-primary"><I size={28} strokeWidth={1.4} /></span>
          <h3 className="mt-4 font-heading text-lg text-primary">{t(f.title)}</h3><p className="mt-2 text-xs leading-relaxed text-muted">{t(f.text)}</p></div></Reveal>) })}</div>
    </div></section>)
}
