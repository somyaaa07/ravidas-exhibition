import { MAX_STALLS } from '../data/registration'
import { p } from '../i18n/p'
// Each rule returns '' when valid, or a bilingual message pair.
const rules = {
  name: v => (v.trim().length < 2 ? p('Enter your full name.', 'अपना पूरा नाम लिखें।') : ''),
  mobile: v => (/^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '').replace(/^(\+91|0)/, '')) ? '' : p('Enter a valid 10-digit mobile number.', 'सही 10 अंकों का मोबाइल नंबर लिखें।')),
  email: v => (/^\S+@\S+\.\S+$/.test(v.trim()) ? '' : p('Enter a valid email address, like name@example.com.', 'सही ईमेल पता लिखें, जैसे name@example.com।')),
  category: v => (v ? '' : p('Choose what you will be showcasing.', 'चुनें कि आप क्या प्रदर्शित करेंगे।')),
  type: v => (v ? '' : p('Choose a stall or tent type.', 'स्टॉल या टेंट का प्रकार चुनें।')),
  count: v => (Number.isInteger(+v) && +v >= 1 && +v <= MAX_STALLS ? '' : p(`Choose between 1 and ${MAX_STALLS} stalls.`, `1 से ${MAX_STALLS} के बीच स्टॉल चुनें।`)),
}
export const stepFields = { contact: ['name', 'mobile', 'email'], stall: ['category', 'type', 'count'], review: [] }
export const validateField = (k, v) => (rules[k] ? rules[k](v) : '')
export const validateStep = (step, values) => Object.fromEntries(stepFields[step].map(k => [k, validateField(k, values[k])]))
export const hasErrors = errs => Object.values(errs).some(Boolean)
