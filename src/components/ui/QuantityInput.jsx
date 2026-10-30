import { Minus, Plus } from 'lucide-react'
export default function QuantityInput({ label, value, onChange, min = 1, max = 20, error }) {
  const set = n => onChange(Math.min(max, Math.max(min, n)))
  const b = 'grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-primary transition hover:border-secondary disabled:opacity-40'
  return (<div><p id="qty-label" className="mb-2 text-sm font-medium text-dark">{label}</p>
    <div className="flex items-center gap-4" role="group" aria-labelledby="qty-label">
      <button type="button" className={b} aria-label="Decrease" disabled={value <= min} onClick={() => set(value - 1)}><Minus size={16} /></button>
      <output aria-live="polite" className="w-8 text-center font-heading text-2xl text-primary">{value}</output>
      <button type="button" className={b} aria-label="Increase" disabled={value >= max} onClick={() => set(value + 1)}><Plus size={16} /></button></div>
    {error && <p role="alert" className="mt-2 text-xs text-red-800">{error}</p>}</div>)
}
