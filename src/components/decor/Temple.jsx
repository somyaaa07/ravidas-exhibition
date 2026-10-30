import { svgProps as g } from './svgProps'
export function Temple({ className = '' }) {
  return (<svg viewBox="0 0 260 220" className={className} aria-hidden="true" {...g} strokeWidth="1">
    <path d="M10 210H250M25 210V160H235V210M40 160V120H220V160M60 120V90H200V120M85 90V65H175V90" />
    <path d="M100 65C100 40 115 28 130 12C145 28 160 40 160 65M130 12V2M126 6H134" />
    <path d="M110 210V170Q130 150 150 170V210M70 210V175Q80 165 90 175V210M170 210V175Q180 165 190 175V210" />
    {[60,90,120,150,180,205].map(x => <path key={x} d={`M${x} 160V125`} />)}
    <path d="M110 65V90M150 65V90M130 40V65" opacity=".6" /></svg>)
}
