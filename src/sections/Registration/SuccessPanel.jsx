import { CircleCheck } from 'lucide-react'
import { ui } from '../../data/ui'
import { useLang } from '../../i18n/LanguageContext'
export default function SuccessPanel({ onReset }) {
  const { t } = useLang(), r = ui.reg
  return (<div role="status" className="flex h-full flex-col items-center justify-center py-10 text-center">
    <CircleCheck size={56} className="text-secondary" strokeWidth={1.3} />
    <h3 className="mt-4 font-heading text-3xl text-primary">{t(r.okTitle)}</h3>
    <p className="mt-2 max-w-sm text-sm text-muted">{t(r.okBody)}</p>
    <button type="button" onClick={onReset} className="btn btn-ghost mt-6">{t(r.again)}</button></div>)
}
