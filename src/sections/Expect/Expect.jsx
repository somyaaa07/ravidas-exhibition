import { experiences } from '../../data/content'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import { Divider } from '../../components/decor/Divider'
import Reveal from '../../components/animation/Reveal'

export default function Expect() {
  const { t } = useLang(), x = ui.expect
  return (<section className="bg-surface py-16"><div className="mx-auto max-w-7xl px-5">
    <p className="text-xs tracking-widest text-secondary">{t(x.label)}</p>
    <h2 className="font-heading text-4xl text-primary">{t(x.title)}</h2>
    <p className="mt-1 text-sm text-muted">{t(x.sub)}</p>
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{experiences.map((e, i) => (
      <Reveal key={e.title.en} delay={i * .05}><article className="card h-full overflow-hidden">
        <img loading="lazy" src={e.image} alt={t(e.title)} className="aspect-[4/3] w-full object-cover" />
        <div className="p-4"><h3 className="font-heading text-primary">{t(e.title)}</h3><p className="mt-1 text-xs text-muted">{t(e.text)}</p></div></article></Reveal>))}</div>
    <Divider className="mt-12" /></div></section>)
}
