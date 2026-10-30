
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { event } from '../../data/event'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'

import heroBg from '../../assets/banner/banner.png'
import heroMobile from '../../assets/banner/hero-mobile.png'

export default function Hero() {
  const { t } = useLang()
  const h = ui.hero

  return (
    <section
      id="home"
      className="parchment relative isolate flex min-h-[calc(100svh-80px)] flex-col overflow-hidden md:min-h-[650px] lg:min-h-[640px] lg:block"
    >

      {/* Mobile Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 md:hidden"
      >
        <img
          src={heroMobile}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EBDD]/95 via-[#F5EBDD]/25 to-[#F5EBDD]/50" />
      </div>

      {/* Tablet Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden md:block lg:hidden"
      >
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#F5EBDD]/95 via-[#F5EBDD]/30 to-transparent" />
      </div>

      {/* Desktop Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
      >
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex w-full flex-1 items-center lg:absolute lg:inset-0 lg:flex lg:items-center">

        <div className="mx-auto grid w-full max-w-7xl items-center px-5 py-8 sm:py-10 lg:grid-cols-[1fr_1.1fr] lg:py-0">

          <div className="relative z-10 py-4 lg:py-10">

            <p className="mb-3 whitespace-pre text-xs tracking-[.2em] text-secondary">
              {t(h.tags)}
            </p>

            <h1 className="max-w-[250px] font-heading text-5xl leading-[1.1] text-primary sm:max-w-[350px] sm:text-6xl md:max-w-[420px] lg:max-w-[440px] xl:max-w-[500px]">
              {t(h.title1)}
              <br />
              {t(h.title2)}
            </h1>

            <h2 className="mt-5 max-w-[270px] font-heading text-2xl leading-snug text-dark sm:max-w-[350px] md:max-w-[420px] lg:max-w-[440px] xl:max-w-[500px]">
              {t(h.subtitle)}
            </h2>

            <p className="mt-4 w-full max-w-[240px] text-sm leading-relaxed text-muted sm:max-w-[350px] md:max-w-[420px] lg:max-w-[440px] xl:max-w-[500px]">
              {t(h.intro)}
            </p>

            {/* Event Details */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm sm:gap-8">

              <div className="flex gap-3">
                <CalendarDays className="shrink-0 text-secondary" />
                <div>
                  <b className="font-medium">{t(event.dates)}</b>
                  <br />
                  <span className="text-muted">{t(event.time)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="shrink-0 text-secondary" />
                <div>
                  <b className="font-medium">{t(event.venue)}</b>
                  <br />
                  <span className="text-muted">{t(event.city)}</span>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              <a href="#register" className="btn btn-primary">
                {t(h.book)}
                <ArrowRight size={16} />
              </a>

              <a href="#exhibition" className="btn btn-ghost">
                {t(h.explore)}
                <ArrowRight size={16} />
              </a>

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
