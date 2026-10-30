import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, Loader2, Send, TriangleAlert } from 'lucide-react'
import { registrationSteps } from '../../data/registration'
import StepIndicator from '../../components/ui/StepIndicator'
import StepContact from './steps/StepContact'
import StepStall from './steps/StepStall'
import StepReview from './steps/StepReview'

const titles = { contact: 'Tell us about you', stall: 'What will you set up?', review: 'Review and send' }
export default function RegistrationForm({ form }) {
  const { step, stepIndex, status, next, back, goTo, submit } = form
  const heading = useRef(null), first = useRef(true)
  useEffect(() => { if (first.current) { first.current = false; return } heading.current?.focus() }, [step])
  const last = step === 'review', loading = status.state === 'loading'
  const onSubmit = e => { e.preventDefault(); last ? submit() : next() }
  return (<form noValidate onSubmit={onSubmit}>
    <StepIndicator steps={registrationSteps} current={stepIndex} onSelect={goTo} />
    <h3 ref={heading} tabIndex={-1} className="mt-8 font-heading text-2xl text-primary outline-none">{titles[step]}</h3>
    <div className="mt-5">{step === 'contact' && <StepContact form={form} />}{step === 'stall' && <StepStall form={form} />}{step === 'review' && <StepReview form={form} />}</div>
    {status.state === 'error' && <div role="alert" className="mt-5 flex gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900"><TriangleAlert className="shrink-0" size={18} /><p>{status.message} Your answers are still here — you can try again or call us using the number on the left.</p></div>}
    <div className="mt-8 flex items-center justify-between gap-3">
      {stepIndex > 0 ? <button type="button" onClick={back} className="btn btn-ghost"><ArrowLeft size={16} />Back</button> : <span />}
      <button type="submit" disabled={loading} className="btn btn-primary disabled:opacity-60">
        {loading ? <><Loader2 className="animate-spin" size={16} />Sending…</> : last ? <>Send registration <Send size={16} /></> : <>Continue <ArrowRight size={16} /></>}</button></div>
  </form>)
}
