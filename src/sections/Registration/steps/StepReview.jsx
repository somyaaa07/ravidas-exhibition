import { Pencil } from 'lucide-react'
export default function StepReview({ form: { values: v, goTo } }) {
  const groups = [[0, 'Your details', [['Name', v.name], ['Organization', v.org || '—'], ['Mobile', v.mobile], ['Email', v.email]]],
    [1, 'Stall details', [['Category', v.category], ['Space', v.type], ['Stalls', v.count], ['Requirements', v.notes || '—']]]]
  return (<div className="space-y-4">{groups.map(([i, t, rows]) => (<section key={t} className="rounded-xl border border-border bg-white p-5">
    <div className="mb-3 flex items-center justify-between"><h4 className="font-heading text-lg text-primary">{t}</h4>
      <button type="button" onClick={() => goTo(i)} className="flex items-center gap-1 text-xs text-secondary hover:underline"><Pencil size={13} />Edit</button></div>
    <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">{rows.map(([k, x]) => <div key={k}><dt className="text-xs text-muted">{k}</dt><dd className="break-words">{x}</dd></div>)}</dl></section>))}</div>)
}
