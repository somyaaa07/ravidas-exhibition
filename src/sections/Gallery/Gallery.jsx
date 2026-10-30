import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { gallery } from '../../data/images'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'

/*
  Layout
  - Mobile  (< 768px):  swipeable snap carousel, next card peeks in from the right.
  - Tablet / desktop:   4-column mosaic. Every block of 4 photos fills a 4x2 area
                        (one large, one wide, two small), so there are no gaps.
  - Tapping any photo opens a lightbox (arrow keys, Escape, swipe-free buttons).
*/

const PREVIEW_COUNT = 8 // two mosaic blocks shown before "view all"

// Position inside each block of 4 -> grid span (tablet and up only)
const SPANS = ['md:col-span-2 md:row-span-2', '', '', 'md:col-span-2']

export default function Gallery() {
  const { t } = useLang()
  const g = ui.gallery
  const [showAll, setShowAll] = useState(false)
  const [active, setActive] = useState(null) // index of the open photo, or null
  const closeRef = useRef(null)
  const lastTrigger = useRef(null)

  const total = gallery.length
  const fullBlocks = Math.floor(total / 4)
  const canExpand = total > PREVIEW_COUNT

  const close = useCallback(() => {
    setActive(null)
    lastTrigger.current?.focus()
  }, [])
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + total) % total)),
    [total]
  )

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  const open = (i, e) => {
    lastTrigger.current = e.currentTarget
    setActive(i)
  }

  const current = active !== null ? gallery[active] : null

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-primary to-dark py-12 text-[#F5EBDD] sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl sm:text-4xl">{t(g.title)}</h2>
            <p className="mt-2 text-sm opacity-80 sm:text-base">{t(g.sub)}</p>
          </div>

          {/* Wrapper handles visibility so .btn's own display value can't override it */}
          {canExpand && !showAll && (
            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="btn border border-secondary"
              >
                {t(g.view)} <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Mobile: snap carousel. md+: mosaic grid. */}
        <ul
          className="-mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-4
                     [scrollbar-width:none] sm:-mx-5 sm:px-5 sm:scroll-px-5
                     md:mx-0 md:grid md:snap-none md:auto-rows-[11rem] md:grid-cols-4 md:gap-4
                     md:overflow-visible md:px-0 md:pb-0 lg:auto-rows-[14rem]
                     [&::-webkit-scrollbar]:hidden md:[grid-auto-flow:dense]"
        >
          {gallery.map((x, i) => {
            const inFullBlock = i < fullBlocks * 4
            const span = inFullBlock ? SPANS[i % 4] : ''
            const hiddenOnGrid = !showAll && i >= PREVIEW_COUNT ? 'md:hidden' : ''
            return (
              <li
                key={x.alt.en}
                className={`h-60 w-[78%] shrink-0 snap-center sm:h-72 sm:w-[60%]
                            md:h-auto md:w-auto md:shrink md:snap-align-none ${span} ${hiddenOnGrid}`}
              >
                <button
                  type="button"
                  onClick={(e) => open(i, e)}
                  aria-label={t(x.alt)}
                  className="group block h-full w-full overflow-hidden rounded-xl border border-secondary/60
                             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                             focus-visible:outline-secondary"
                >
                  <img
                    src={x.src}
                    alt=""
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(current.alt)}
          className="fixed inset-0 z-[60] flex flex-col bg-dark/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-sm tabular-nums opacity-80">
              {active + 1} / {total}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/60"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); step(-1) }}
              className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/60 bg-dark/70 sm:left-4"
            >
              <ChevronLeft size={22} />
            </button>

            <img
              key={current.src}
              src={current.src}
              alt={t(current.alt)}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain"
            />

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); step(1) }}
              className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/60 bg-dark/70 sm:right-4"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <p className="px-6 py-4 text-center text-sm opacity-90" onClick={(e) => e.stopPropagation()}>
            {t(current.alt)}
          </p>
        </div>
      )}
    </section>
  )
}