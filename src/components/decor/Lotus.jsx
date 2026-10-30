import { svgProps as g } from './svgProps'
export function Lotus({ className = '', sw = 1 }) {
  const p = 'M50 88 C28 64 33 32 50 10 C67 32 72 64 50 88Z'
  return (<svg viewBox="0 0 100 100" className={className} aria-hidden="true" {...g} strokeWidth={sw}>
    {[-70,-45,45,70].map(r => <path key={r} d={p} transform={`rotate(${r} 50 88)`} />)}
    {[-22,22].map(r => <path key={r} d={p} transform={`rotate(${r} 50 88)`} />)}
    <path d={p} /><path d="M50 88 V30 M42 84 C46 60 48 45 50 30 M58 84 C54 60 52 45 50 30" opacity=".5" />
    <path d="M30 92 Q50 98 70 92" /></svg>)
}
