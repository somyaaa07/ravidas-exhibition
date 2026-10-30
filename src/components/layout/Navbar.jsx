import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import Logo from './Logo'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (<header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
      <Logo />
      <nav aria-label="Main" className="hidden gap-8 text-sm lg:flex">
        {navLinks.map(([l, id], i) => <a key={id} href={`#${id}`} className={`hover:text-secondary ${i === 0 ? 'font-medium text-primary' : 'text-muted'}`}>{l}</a>)}</nav>
      <a href="#register" className="btn btn-primary hidden lg:inline-flex">Register for Stall</a>
      <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-border bg-surface px-5 pb-5 lg:hidden">
      {navLinks.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted">{l}</a>)}
      <a href="#register" onClick={() => setOpen(false)} className="btn btn-primary mt-2">Register for Stall</a></div>}
  </header>)
}
