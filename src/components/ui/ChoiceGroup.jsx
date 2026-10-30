import { useLang } from '../../i18n/LanguageContext'
// Accessible radio group. options: [{ value, label, desc? }]. `cards` shows label + description as cards, otherwise chips.
export default function ChoiceGroup({ legend, name, options, value, onChange, error, cards }) {
  const { t } = useLang()
  return (<fieldset>
    <legend className="mb-2 text-sm font-medium text-dark">{t(legend)}</legend>
    <div className={cards ? 'grid gap-3 sm:grid-cols-3' : 'flex flex-wrap gap-2'}>
      {options.map(o => (<label key={o.value} className="cursor-pointer">
        <input type="radio" name={name} value={o.value} checked={value === o.value} onChange={() => onChange(o.value)} className="peer sr-only" />
        {cards ? <span className="block h-full rounded-xl border border-border bg-white p-4 transition peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:ring-2 peer-checked:ring-primary/30 peer-focus-visible:ring-2 peer-focus-visible:ring-secondary hover:border-secondary">
            <span className="block font-heading text-primary">{t(o.label)}</span><span className="mt-1 block text-xs text-muted">{t(o.desc)}</span></span>
          : <span className="block rounded-full border border-border bg-white px-4 py-2 text-sm transition peer-checked:border-primary peer-checked:bg-primary peer-checked:text-surface peer-focus-visible:ring-2 peer-focus-visible:ring-secondary hover:border-secondary">{t(o.label)}</span>}
      </label>))}
    </div>
    {error && <p role="alert" className="mt-2 text-xs text-red-800">{t(error)}</p>}
  </fieldset>)
}
