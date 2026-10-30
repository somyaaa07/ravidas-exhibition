import { MAX_STALLS } from '../data/registration'
const rules = {
  name: v => (v.trim().length < 2 ? 'Enter your full name.' : ''),
  mobile: v => (/^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '').replace(/^(\+91|0)/, '')) ? '' : 'Enter a valid 10-digit mobile number.'),
  email: v => (/^\S+@\S+\.\S+$/.test(v.trim()) ? '' : 'Enter a valid email address, like name@example.com.'),
  category: v => (v ? '' : 'Choose what you will be showcasing.'),
  type: v => (v ? '' : 'Choose a stall or tent type.'),
  count: v => (Number.isInteger(+v) && +v >= 1 && +v <= MAX_STALLS ? '' : `Choose between 1 and ${MAX_STALLS} stalls.`),
}
export const stepFields = { contact: ['name', 'mobile', 'email'], stall: ['category', 'type', 'count'], review: [] }
export const validateField = (k, v) => (rules[k] ? rules[k](v) : '')
export const validateStep = (step, values) => Object.fromEntries(stepFields[step].map(k => [k, validateField(k, values[k])]))
export const hasErrors = errs => Object.values(errs).some(Boolean)
