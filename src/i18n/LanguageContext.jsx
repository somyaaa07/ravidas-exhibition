import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ui } from '../data/ui'

export const LANGS = [{ code: 'en', label: 'EN', name: 'English' }, { code: 'hi', label: 'हिं', name: 'हिन्दी' }]
const Ctx = createContext(null)
const initial = () => { try { const s = localStorage.getItem('lang'); if (s === 'en' || s === 'hi') return s } catch {} return 'en' }

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initial)
  // t() accepts a {en, hi} pair (or a plain string) and returns the text for the active language.
  const t = useCallback(x => (x && typeof x === 'object' ? x[lang] ?? x.en : x), [lang])
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui.meta.title[lang]
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}
export const useLang = () => useContext(Ctx)
