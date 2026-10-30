import { experiences } from '../../data/content'
import { Divider } from '../../components/decor/Divider'
import Reveal from '../../components/animation/Reveal'

export default function Expect() {
  return (<section className="bg-surface py-16"><div className="mx-auto max-w-7xl px-5">
    <p className="text-xs tracking-widest text-secondary">WHAT TO EXPECT</p>
    <h2 className="font-heading text-4xl text-primary">More Than Just an Exhibition</h2>
    <p className="mt-1 text-sm text-muted">A well-organized event with something for everyone.</p>
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">{experiences.map(([t, d, s], i) => (
      <Reveal key={t} delay={i * .05}><article className="card h-full overflow-hidden">
        <img loading="lazy" src={s} alt={t} className="aspect-[4/3] w-full object-cover" />
        <div className="p-4"><h3 className="font-heading text-primary">{t}</h3><p className="mt-1 text-xs text-muted">{d}</p></div></article></Reveal>))}</div>
    <Divider className="mt-12" /></div></section>)
}
