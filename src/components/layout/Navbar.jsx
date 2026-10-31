import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import LanguageToggle from '../ui/LanguageToggle'
import Logo from './Logo'

/*
  Breakpoints
  - Mobile  (< 768px):   logo + language toggle + hamburger. Menu is a single column.
  - Tablet  (768-1023):  Register button appears in the bar. Menu is a two-column grid.
  - Desktop (>= 1024px): full inline nav, no hamburger.
*/

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()
  const close = () => setOpen(false)

  // Close on Escape, and close if the viewport grows into the desktop layout
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close()
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && close()
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [])

  // Prevent the page behind the open menu from scrolling
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-1 py-3 sm:px-1 md:gap-4 lg:px-1">
         <div className="relative z-10 flex h-14 w-20 shrink-0 items-center">
      <Logo />
    </div>

        {/* Desktop navigation */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-3 text-[10px] lg:flex xl:gap-6 xl:text-[13px] ml-10"
        >
          {navLinks.map(([label, id], i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap hover:text-secondary ${
                i === 0 ? 'font-medium text-primary' : 'text-muted'
              }`}
            >
              {t(label)}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageToggle />

          {/* Tablet + desktop: Register lives in the bar. Mobile: it moves into the menu. */}
  <a href="#register" className="btn btn-primary !hidden md:!inline-flex">
  {t(ui.common.registerShort)}
</a>
          {/* Mobile + tablet: hamburger */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
            aria-label={t(ui.common.menu)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile + tablet menu */}
      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-surface px-4 pb-6 pt-2 sm:px-5 lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:gap-x-8">
            {navLinks.map(([label, id], i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={close}
                className={`block border-b border-border py-3 text-base ${
                  i === 0 ? 'font-medium text-primary' : 'text-muted'
                }`}
              >
                {t(label)}
              </a>
            ))}
          </nav>

          {/* Full-width on phones; hidden on tablet because it's already in the bar */}
          <a
            href="#register"
            onClick={close}
            className="btn btn-primary mt-4 flex w-full justify-center md:hidden"
          >
            {t(ui.common.registerShort)}
          </a>
        </div>
      )}
    </header>
  )
}