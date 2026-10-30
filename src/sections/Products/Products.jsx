import { useState } from 'react'
import { Package, Ruler, Weight, Mail } from 'lucide-react'
import { products, productCategories } from '../../data/products'
import { productImage } from '../../data/images'
import { event } from '../../data/event'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import MediaImage from '../../components/ui/MediaImage'
import Reveal from '../../components/animation/Reveal'

const rupees = n => '₹' + n.toLocaleString('en-IN')
export default function Products() {
  const { t } = useLang(), pr = ui.products, [cat, setCat] = useState('all')
  const list = cat === 'all' ? products : products.filter(x => x.category === cat)
  const chips = [{ id: 'all', label: pr.all }, ...productCategories]
  return (<section id="products" className="bg-surface py-16"><div className="mx-auto max-w-7xl px-5">
    <Reveal className="text-center"><p className="text-xs tracking-widest text-secondary">{t(pr.label)}</p>
      <h2 className="font-heading text-4xl text-primary">{t(pr.title)}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted">{t(pr.sub)}</p></Reveal>
    <div role="group" aria-label={t(pr.filter)} className="mt-8 flex flex-wrap justify-center gap-2">{chips.map(c => (
      <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}
        className={`rounded-full border px-4 py-2 text-sm transition ${cat === c.id ? 'border-primary bg-primary text-surface' : 'border-border bg-white hover:border-secondary'}`}>{t(c.label)}</button>))}</div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map(x => (
      <article key={x.id} className="card flex flex-col overflow-hidden">
        <div className="relative aspect-square"><MediaImage src={productImage(x.image)} alt={t(x.name)} icon={Package} label={t(pr.photo)} />
          {x.sample && <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-2.5 py-0.5 text-[11px] text-muted">{t(ui.common.sample)}</span>}</div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-lg leading-snug text-primary">{t(x.name)}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t(x.description)}</p>
          <dl className="mt-4 space-y-1.5 border-t border-border pt-3 text-sm">
            <div className="flex items-center justify-between gap-3"><dt className="flex items-center gap-2 text-muted"><Ruler size={14} className="text-secondary" />{t(pr.size)}</dt><dd className="text-right">{t(x.size)}</dd></div>
            <div className="flex items-center justify-between gap-3"><dt className="flex items-center gap-2 text-muted"><Weight size={14} className="text-secondary" />{t(pr.weight)}</dt><dd className="text-right">{t(x.weight)}</dd></div></dl>
          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
            <div><p className="text-xs text-muted">{t(pr.price)}</p><p className="font-heading text-2xl text-primary">{rupees(x.price)}</p></div>
            <a href={`mailto:${event.email}?subject=${encodeURIComponent(t(pr.mailSubject) + ': ' + x.name.en)}`} className="btn btn-ghost !px-4 !py-2"><Mail size={14} />{t(pr.enquire)}</a></div>
        </div></article>))}</div>
    <p className="mt-6 text-center text-xs text-muted">{t(pr.note)}</p>
  </div></section>)
}
