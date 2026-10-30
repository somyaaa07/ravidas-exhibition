import TextField from '../../../components/ui/TextField'
import { ui } from '../../../data/ui'
export default function StepContact({ form: { values: v, errors: e, setValue, blur } }) {
  const f = (k, label) => ({ id: k, label, value: v[k], error: e[k], onChange: x => setValue(k, x.target.value), onBlur: () => blur(k) })
  return (<div className="grid gap-5 sm:grid-cols-2">
    <TextField {...f('name', ui.reg.name)} autoComplete="name" className="sm:col-span-2" />
    <TextField {...f('org', ui.reg.org)} optional autoComplete="organization" className="sm:col-span-2" />
    <TextField {...f('mobile', ui.reg.mobile)} type="tel" inputMode="numeric" autoComplete="tel" placeholder="98765 43210" />
    <TextField {...f('email', ui.reg.email)} type="email" autoComplete="email" placeholder="name@example.com" /></div>)
}
