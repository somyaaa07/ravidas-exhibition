import { Pencil } from 'lucide-react'
import { stallCategories, stallTypes } from '../../../data/registration'
import { ui } from '../../../data/ui'
import { useLang } from '../../../i18n/LanguageContext'
export default function StepReview({ form: { values: v, goTo } }) {
  const { t } = useLang(), r = ui.reg, dash = '—'
  const lbl = (list, val) => t(list.find(o => o.value === val)?.label) || dash
  const groups = [[0, r.yourDetails, [[r.name, v.name], [r.org, v.org || dash], [r.mobile, v.mobile], [r.email, v.email]]],
    [1, r.stallDetails, [[r.category, lbl(stallCategories, v.category)], [r.space, lbl(stallTypes, v.type)], [r.stalls, v.count], [r.reqs, v.notes || dash]]]]
  return (<div className="space-y-4">{groups.map(([i, title, rows]) => (<section key={i} className="rounded-xl border border-border bg-white p-5">
    <div className="mb-3 flex items-center justify-between"><h4 className="font-heading text-lg text-primary">{t(title)}</h4>
      <button type="button" onClick={() => goTo(i)} className="flex items-center gap-1 text-xs text-secondary hover:underline"><Pencil size={13} />{t(r.edit)}</button></div>
    <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">{rows.map(([k, x]) => <div key={k.en}><dt className="text-xs text-muted">{t(k)}</dt><dd className="break-words">{x}</dd></div>)}</dl></section>))}</div>)
}
