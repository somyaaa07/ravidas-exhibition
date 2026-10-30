import { Facebook, Instagram, Youtube } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { Lotus } from '../decor/Lotus'
import Logo from './Logo'

export default function Footer() {
  return (<footer className="relative overflow-hidden bg-primary py-10 text-[#F5EBDD]">
    <Lotus className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 text-secondary/50" /><Lotus className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 text-secondary/50" />
    <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 lg:flex-row lg:justify-between">
      <div><Logo light /><p className="mt-1 text-center text-xs opacity-70 lg:text-left">Equality | Humanity | Harmony</p></div>
      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-5 text-xs">{navLinks.map(([l, id]) => <a key={id} href={`#${id}`} className="hover:text-secondary">{l}</a>)}</nav>
      <div className="flex gap-4">{[[Facebook,'Facebook'],[Instagram,'Instagram'],[Youtube,'YouTube']].map(([I, n]) => <a key={n} href="#home" aria-label={n}><I size={18} /></a>)}</div></div>
    <p className="relative mt-6 text-center text-[11px] opacity-60">© 2025 Sant Ravidas Ji Exhibition. All rights reserved.</p></footer>)
}
