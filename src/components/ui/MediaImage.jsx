import { ImageOff } from 'lucide-react'
// Shows the photo if one exists, otherwise a tidy placeholder so the layout never breaks.
export default function MediaImage({ src, alt, icon: Icon = ImageOff, label, className = '' }) {
  if (src) return <img loading="lazy" src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
  return (<div role="img" aria-label={alt} className={`grid h-full w-full place-items-center bg-gradient-to-br from-border/50 to-background text-secondary ${className}`}>
    <div className="text-center"><Icon size={34} strokeWidth={1.3} className="mx-auto" aria-hidden="true" />{label && <p className="mt-2 text-xs text-muted">{label}</p>}</div></div>)
}
