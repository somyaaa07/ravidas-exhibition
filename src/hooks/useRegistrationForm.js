import { useState } from 'react'
import { initialValues, registrationSteps } from '../data/registration'
import { validateField, validateStep, hasErrors } from '../utils/validation'
import { submitRegistration } from '../services/submitRegistration'

export default function useRegistrationForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [stepIndex, setStepIndex] = useState(0)
  const [status, setStatus] = useState({ state: 'idle', message: '' }) // idle | loading | success | error
  const step = registrationSteps[stepIndex].id

  const setValue = (k, v) => {
    setValues(p => ({ ...p, [k]: v }))
    if (errors[k]) setErrors(p => ({ ...p, [k]: validateField(k, v) }))
  }
  const blur = k => setErrors(p => ({ ...p, [k]: validateField(k, values[k]) }))
  const next = () => {
    const errs = validateStep(step, values); setErrors(errs)
    if (!hasErrors(errs)) setStepIndex(i => Math.min(i + 1, registrationSteps.length - 1))
  }
  const back = () => { setStatus({ state: 'idle', message: '' }); setStepIndex(i => Math.max(i - 1, 0)) }
  const goTo = i => i < stepIndex && setStepIndex(i)
  const submit = async () => {
    setStatus({ state: 'loading', message: '' })
    try { await submitRegistration(values); setStatus({ state: 'success', message: '' }) }
    catch (e) { setStatus({ state: 'error', message: e.message }) }
  }
  const reset = () => { setValues(initialValues); setErrors({}); setStepIndex(0); setStatus({ state: 'idle', message: '' }) }
  return { values, errors, step, stepIndex, status, setValue, blur, next, back, goTo, submit, reset }
}
