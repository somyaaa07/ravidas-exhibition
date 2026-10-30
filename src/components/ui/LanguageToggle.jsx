import { Languages } from 'lucide-react'
import { LANGS, useLang } from '../../i18n/LanguageContext'
export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLang()
  return (<div role="group" aria-label="Language / भाषा" className={`inline-flex items-center rounded-full border border-border bg-surface p-1 text-sm ${className}`}>
    <Languages size={16} className="mx-2 text-secondary" aria-hidden="true" />
    {LANGS.map(l => <button key={l.code} type="button" lang={l.code} aria-pressed={lang === l.code} title={l.name} onClick={() => setLang(l.code)}
      className={`rounded-full px-3 py-1 transition ${lang === l.code ? 'bg-primary text-surface' : 'text-muted hover:text-primary'}`}>{l.label}</button>)}</div>)
}
