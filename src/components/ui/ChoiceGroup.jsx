// Accessible radio group shown as chips (strings) or cards ({value,title,desc}).
export default function ChoiceGroup({ legend, name, options, value, onChange, error, cards }) {
  return (<fieldset>
    <legend className="mb-2 text-sm font-medium text-dark">{legend}</legend>
    <div className={cards ? 'grid gap-3 sm:grid-cols-3' : 'flex flex-wrap gap-2'}>
      {options.map(o => { const v = o.value ?? o, on = value === v
        return (<label key={v} className="cursor-pointer">
          <input type="radio" name={name} value={v} checked={on} onChange={() => onChange(v)} className="peer sr-only" />
          {cards ? <span className="block h-full rounded-xl border border-border bg-white p-4 transition peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-2 peer-checked:ring-primary/30 peer-focus-visible:ring-2 peer-focus-visible:ring-secondary hover:border-secondary">
              <span className="block font-heading text-primary">{o.title}</span><span className="mt-1 block text-xs text-muted">{o.desc}</span></span>
            : <span className="block rounded-full border border-border bg-white px-4 py-2 text-sm transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-surface peer-focus-visible:ring-2 peer-focus-visible:ring-secondary hover:border-secondary">{v}</span>}
        </label>) })}
    </div>
    {error && <p role="alert" className="mt-2 text-xs text-red-800">{error}</p>}
  </fieldset>)
}
