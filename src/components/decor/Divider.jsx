import { Lotus } from './Lotus'
export function Divider({ className = '' }) {
  return (<div className={`flex items-center justify-center gap-3 text-secondary ${className}`} aria-hidden="true">
    <span className="h-px w-16 bg-border" /><Lotus className="h-6 w-6" /><span className="h-px w-16 bg-border" /></div>)
}
