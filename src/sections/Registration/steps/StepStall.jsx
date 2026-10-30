import { stallCategories, stallTypes, MAX_STALLS } from '../../../data/registration'
import { ui } from '../../../data/ui'
import ChoiceGroup from '../../../components/ui/ChoiceGroup'
import QuantityInput from '../../../components/ui/QuantityInput'
import TextField from '../../../components/ui/TextField'
export default function StepStall({ form: { values: v, errors: e, setValue } }) {
  const r = ui.reg
  return (<div className="space-y-6">
    <ChoiceGroup legend={r.showcase} name="category" options={stallCategories} value={v.category} onChange={x => setValue('category', x)} error={e.category} />
    <ChoiceGroup cards legend={r.space} name="type" options={stallTypes} value={v.type} onChange={x => setValue('type', x)} error={e.type} />
    <QuantityInput label={r.count} value={v.count} max={MAX_STALLS} onChange={x => setValue('count', x)} error={e.count} />
    <TextField as="textarea" rows={3} id="notes" label={r.notes} optional value={v.notes} onChange={x => setValue('notes', x.target.value)} hint={r.notesHint} /></div>)
}
