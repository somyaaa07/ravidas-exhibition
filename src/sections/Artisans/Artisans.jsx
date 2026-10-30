import * as Icons from 'lucide-react'
import { MapPin } from 'lucide-react'
import { artisans } from '../../data/artisans'
import { artisanImage } from '../../data/images'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import MediaImage from '../../components/ui/MediaImage'
import Reveal from '../../components/animation/Reveal'

export default function Artisans() {
  const { t } = useLang(), a = ui.artisans
  return (<section id="artisans" className="parchment py-16"><div className="mx-auto max-w-7xl px-5">
    <Reveal className="text-center"><p className="text-xs tracking-widest text-secondary">{t(a.label)}</p>
      <h2 className="font-heading text-4xl text-primary">{t(a.title)}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted">{t(a.sub)}</p></Reveal>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{artisans.map((x, i) => (
      <Reveal key={x.id} delay={i * .06}><article className="card flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/3]"><MediaImage src={/^https?:\/\//.test(x.image || '') ? x.image : artisanImage(x.image)} alt={t(x.name)} icon={Icons[x.icon]} label={t(a.photo)} className='aspect-6/5' />
          {x.sample && <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-0.5 text-[11px] text-muted">{t(ui.common.sample)}</span>}</div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-lg text-primary">{t(x.name)}</h3>
          <p className="text-sm text-secondary">{t(x.craft)}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted"><MapPin size={13} />{t(x.place)}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t(x.story)}</p>
          <div className="mt-4 flex flex-wrap gap-2" aria-label={t(a.specialities)}>{x.tags.map(g => <span key={g.en} className="rounded-full border border-border px-3 py-0.5 text-xs">{t(g)}</span>)}</div>
        </div></article></Reveal>))}</div>
  </div></section>)
}
