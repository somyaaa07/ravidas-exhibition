import { ArrowRight } from 'lucide-react'
import { gallery } from '../../data/images'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'

export default function Gallery() {
  const { t } = useLang(), g = ui.gallery
  return (<section id="gallery" className="bg-gradient-to-b from-primary to-dark py-12 text-[#F5EBDD]"><div className="mx-auto max-w-7xl px-5">
    <div className="flex flex-wrap items-end justify-between gap-3"><div>
      <h2 className="font-heading text-3xl">{t(g.title)}</h2><p className="text-sm opacity-80">{t(g.sub)}</p></div>
      <a href="#gallery" className="btn border border-secondary">{t(g.view)} <ArrowRight size={16} /></a></div>
    <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-3">{gallery.map(x => <img key={x.alt.en} loading="lazy" src={x.src} alt={t(x.alt)} className="h-40 w-64 shrink-0 snap-start rounded-lg border border-secondary object-cover" />)}</div>
  </div></section>)
}
