// Registration form configuration — edit labels, options and limits here.
export const MAX_STALLS = 20
export const registrationSteps = [
  { id: 'contact', label: 'Your details' },
  { id: 'stall', label: 'Stall details' },
  { id: 'review', label: 'Review' },
]
export const stallCategories = ['Handicrafts', 'Clothing', 'Books', 'Educational displays', 'Food & beverages', 'Cultural products', 'Community organization', 'Other']
export const stallTypes = [
  { value: 'Stall', title: 'Open stall', desc: 'A table-top or counter display' },
  { value: 'Tent', title: 'Tent', desc: 'A covered space for larger setups' },
  { value: 'Either', title: 'No preference', desc: 'We will suggest what fits best' },
]
export const initialValues = { name: '', org: '', mobile: '', email: '', category: '', type: '', count: 1, notes: '' }
export const benefits = ['Spacious stall and tent areas', 'High footfall and visibility', 'Basic amenities, subject to confirmation', 'Support from the event team']
export const howItWorks = [
  ['Send your request', 'Fill in the short form — it takes about two minutes.'],
  ['We get in touch', 'The organising team contacts you to discuss availability.'],
  ['Confirm and set up', 'Receive your stall details and join the exhibition.'],
]
