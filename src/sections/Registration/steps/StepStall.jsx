import { stallCategories, stallTypes, MAX_STALLS } from '../../../data/registration'
import ChoiceGroup from '../../../components/ui/ChoiceGroup'
import QuantityInput from '../../../components/ui/QuantityInput'
import TextField from '../../../components/ui/TextField'
export default function StepStall({ form: { values: v, errors: e, setValue } }) {
  return (<div className="space-y-6">
    <ChoiceGroup legend="What will you showcase?" name="category" options={stallCategories} value={v.category} onChange={x => setValue('category', x)} error={e.category} />
    <ChoiceGroup cards legend="Preferred space" name="type" options={stallTypes} value={v.type} onChange={x => setValue('type', x)} error={e.type} />
    <QuantityInput label="Number of stalls" value={v.count} max={MAX_STALLS} onChange={x => setValue('count', x)} error={e.count} />
    <TextField as="textarea" rows={3} id="notes" label="Additional requirements" optional value={v.notes} onChange={x => setValue('notes', x.target.value)} hint="For example: electricity, table size, refrigeration." /></div>)
}
