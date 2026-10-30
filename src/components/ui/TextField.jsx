import { useLang } from '../../i18n/LanguageContext'
import { ui } from '../../data/ui'
export default function TextField({ id, label, optional, error, hint, as = 'input', className = '', ...props }) {
  const { t } = useLang(), Tag = as, desc = error ? `${id}-err` : hint ? `${id}-hint` : undefined
  return (<div className={className}>
    <label htmlFor={id} className="mb-1.5 flex justify-between text-sm font-medium text-dark">{t(label)}{optional && <span className="text-xs font-normal text-muted">{t(ui.common.optional)}</span>}</label>
    <Tag id={id} name={id} aria-invalid={!!error} aria-describedby={desc} {...props}
      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-4 focus:ring-secondary/15 ${error ? 'border-red-700' : 'border-border'}`} />
    {error ? <p id={`${id}-err`} role="alert" className="mt-1.5 text-xs text-red-800">{t(error)}</p> : hint && <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">{t(hint)}</p>}
  </div>)
}
