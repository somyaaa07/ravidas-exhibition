import { Check } from 'lucide-react'
import { useLang } from '../../i18n/LanguageContext'
import { ui } from '../../data/ui'
export default function StepIndicator({ steps, current, onSelect }) {
  const { t } = useLang()
  return (<ol className="flex items-center" aria-label={t(ui.reg.progress)}>
    {steps.map((s, i) => { const done = i < current, now = i === current
      return (<li key={s.id} className="flex flex-1 items-center last:flex-none" aria-current={now ? 'step' : undefined}>
        <button type="button" disabled={!done} onClick={() => onSelect(i)} className="flex items-center gap-2 disabled:cursor-default">
          <span className={`grid h-8 w-8 place-items-center rounded-full text-sm ${done ? 'bg-secondary text-white' : now ? 'bg-primary text-surface' : 'border border-border text-muted'}`}>{done ? <Check size={15} /> : i + 1}</span>
          <span className={`hidden text-sm sm:inline ${now ? 'font-medium text-primary' : 'text-muted'}`}>{t(s.label)}</span></button>
        {i < steps.length - 1 && <span className={`mx-3 h-px flex-1 ${done ? 'bg-secondary' : 'bg-border'}`} />}</li>) })}</ol>)
}
