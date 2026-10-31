// Registration form configuration — edit options, steps and limits here. `value` is what is sent to your backend (keep it English).
import { p } from '../i18n/p'
export const MAX_STALLS = 20
export const registrationSteps = [
  { id: 'contact', label: p('Your details', 'आपका विवरण') },
  { id: 'stall', label: p('Stall details', 'स्टॉल विवरण') },
  { id: 'review', label: p('Review', 'जाँच') },
]
export const stallCategories = [
  { value: 'Handicrafts', label: p('Handicrafts', 'हस्तशिल्प') }, { value: 'Clothing', label: p('Clothing', 'वस्त्र') },
  { value: 'Books', label: p('Books', 'पुस्तकें') }, { value: 'Educational displays', label: p('Educational displays', 'शैक्षिक प्रदर्शन') },
  { value: 'Food & beverages', label: p('Food & beverages', 'खान-पान') }, { value: 'Cultural products', label: p('Cultural products', 'सांस्कृतिक उत्पाद') },
  { value: 'Community organization', label: p('Community organization', 'सामुदायिक संगठन') }, { value: 'Other', label: p('Other', 'अन्य') },
]
export const stallTypes = [
  { value: 'Stall', label: p('Open stall', 'खुला स्टॉल'), desc: p('A table-top or counter display', 'मेज़ या काउंटर पर प्रदर्शन') },
  { value: 'Tent', label: p('Tent', 'टेंट'), desc: p('A covered space for larger setups', 'बड़े प्रदर्शन के लिए ढकी जगह') },
  { value: 'Either', label: p('No preference', 'कोई वरीयता नहीं'), desc: p('We will suggest what fits best', 'हम सबसे उपयुक्त सुझाएँगे') },
]
export const initialValues = { name: '', org: '', mobile: '', email: '', category: '', type: '', count: 1, notes: '' }
export const benefits = [p('Spacious stall and tent areas', 'विशाल स्टॉल व टेंट क्षेत्र'), p('High footfall and visibility', 'अधिक आगंतुक और दृश्यता'), p('Basic amenities, subject to confirmation', 'मूलभूत सुविधाएँ, पुष्टि के अधीन'), p('Support from the event team', 'आयोजन टीम का सहयोग')]
export const howItWorks = [
  [p('Send your request', 'अपना अनुरोध भेजें'), p('Fill in the short form — it takes about two minutes.', 'छोटा फ़ॉर्म भरें — लगभग दो मिनट लगते हैं।')],
  [p('We get in touch', 'हम संपर्क करेंगे'), p('The organising team contacts you to discuss availability.', 'आयोजन समिति उपलब्धता पर चर्चा के लिए संपर्क करेगी।')],
  [p('Confirm and set up', 'पुष्टि करें और लगाएँ'), p('Receive your stall details and join the exhibition.', 'स्टॉल का विवरण पाएँ और महोत्सव से जुड़ें।')],
]
