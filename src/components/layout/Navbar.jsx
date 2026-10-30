import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
import LanguageToggle from '../ui/LanguageToggle'
import Logo from './Logo'
export default function Navbar() {
  const [open, setOpen] = useState(false), { t } = useLang()
  return (<header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
      <Logo />
      <nav aria-label="Main" className="hidden gap-6 text-sm xl:flex">
        {navLinks.map(([l, id], i) => <a key={id} href={`#${id}`} className={`hover:text-secondary ${i === 0 ? 'font-medium text-primary' : 'text-muted'}`}>{t(l)}</a>)}</nav>
      <div className="flex items-center gap-3">
        <LanguageToggle />
        <a href="#register" className="btn btn-primary hidden xl:inline-flex">{t(ui.common.registerShort)}</a>
        <button className="xl:hidden" aria-label={t(ui.common.menu)} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
    {open && <div className="border-t border-border bg-surface px-5 pb-5 xl:hidden">
      {navLinks.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted">{t(l)}</a>)}
      <a href="#register" onClick={() => setOpen(false)} className="btn btn-primary mt-2">{t(ui.common.registerShort)}</a></div>}
  </header>)
}
