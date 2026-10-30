import TextField from '../../../components/ui/TextField'
export default function StepContact({ form: { values: v, errors: e, setValue, blur } }) {
  const p = k => ({ id: k, value: v[k], error: e[k], onChange: x => setValue(k, x.target.value), onBlur: () => blur(k) })
  return (<div className="grid gap-5 sm:grid-cols-2">
    <TextField {...p('name')} label="Full name" autoComplete="name" className="sm:col-span-2" />
    <TextField {...p('org')} label="Organization / business name" optional autoComplete="organization" className="sm:col-span-2" />
    <TextField {...p('mobile')} label="Mobile number" type="tel" inputMode="numeric" autoComplete="tel" placeholder="98765 43210" />
    <TextField {...p('email')} label="Email address" type="email" autoComplete="email" placeholder="name@example.com" /></div>)
}
