import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { event } from '../../data/event'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import heroBg from '../../assets/banner/banner.png'

export default function Hero() {
  const { t } = useLang(), h = ui.hero
  return (<section id="home" className="parchment relative flex min-h-screen items-center overflow-hidden lg:block lg:min-h-[640px]">
    {/* Background image: absolute on mobile/tablet, in-flow on desktop so there is no top/bottom gap */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 lg:static lg:inset-auto">
      <img
        src={heroBg}
        alt=""
        className="h-full w-full object-cover object-right lg:h-auto lg:object-contain lg:[mask-image:linear-gradient(to_right,transparent,#000_18%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5EBDD]/95 via-[#F5EBDD]/75 to-[#F5EBDD]/20 lg:hidden" />
    </div>

    <div className="relative z-10 w-full lg:absolute lg:inset-0 lg:flex lg:items-center">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-5 py-10 lg:grid-cols-[1fr_1.1fr] lg:py-0">
        <div className="relative z-10 py-8 lg:py-10">
          <p className="mb-3 whitespace-pre text-xs tracking-[.2em] text-secondary">{t(h.tags)}</p>
          <h1 className="font-heading text-5xl leading-[1.1] text-primary sm:text-6xl">{t(h.title1)}<br />{t(h.title2)}</h1>
          <h2 className="mt-5 font-heading text-2xl leading-snug text-dark">{t(h.subtitle)}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{t(h.intro)}</p>
          <div className="mt-6 flex flex-wrap gap-8 text-sm">
            <div className="flex gap-3"><CalendarDays className="text-secondary" /><div><b className="font-medium">{t(event.dates)}</b><br /><span className="text-muted">{t(event.time)}</span></div></div>
            <div className="flex gap-3"><MapPin className="text-secondary" /><div><b className="font-medium">{t(event.venue)}</b><br /><span className="text-muted">{t(event.city)}</span></div></div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#register" className="btn btn-primary">{t(h.book)} <ArrowRight size={16} /></a>
            <a href="#exhibition" className="btn btn-ghost">{t(h.explore)} <ArrowRight size={16} /></a></div>
        </div>
      </div>
    </div></section>)
}