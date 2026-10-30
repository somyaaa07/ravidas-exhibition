import { CircleCheck } from 'lucide-react'
export default function SuccessPanel({ onReset }) {
  return (<div role="status" className="flex h-full flex-col items-center justify-center py-10 text-center">
    <CircleCheck size={56} className="text-secondary" strokeWidth={1.3} />
    <h3 className="mt-4 font-heading text-3xl text-primary">Registration sent</h3>
    <p className="mt-2 max-w-sm text-sm text-muted">Thank you. The organising team will contact you on the mobile number or email you provided.</p>
    <button type="button" onClick={onReset} className="btn btn-ghost mt-6">Register another stall</button></div>)
}
