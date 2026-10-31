import { p } from '../i18n/p'
import { experienceImages } from './images'
export const pillars = [
  [p('Social Equality', 'सामाजिक समानता'), p('He opposed caste discrimination and stood for equal rights.', 'उन्होंने जातिगत भेदभाव का विरोध किया और समान अधिकारों के लिए आवाज़ उठाई।')],
  [p('Spiritual Wisdom', 'आध्यात्मिक ज्ञान'), p('His teachings emphasize love, compassion and devotion.', 'उनकी शिक्षाएँ प्रेम, करुणा और भक्ति पर बल देती हैं।')],
  [p('Timeless Legacy', 'कालजयी विरासत'), p('His message continues to inspire generations worldwide.', 'उनका संदेश विश्वभर की पीढ़ियों को प्रेरित करता है।')],
]
export const features = [
  { icon: 'BookOpen', title: p('Stall & Tent Booking', 'स्टॉल व टेंट बुकिंग'), text: p('Set up your stalls and tents and showcase your products, services or community work.', 'अपने स्टॉल और टेंट लगाएँ तथा उत्पाद, सेवाएँ या सामुदायिक कार्य प्रदर्शित करें।') },
  { icon: 'Music', title: p('Cultural Programs', 'सांस्कृतिक कार्यक्रम'), text: p('Bhajans, kavi sammelan, exhibitions, and inspiring speeches.', 'भजन, कवि सम्मेलन, प्रदर्शनियाँ और प्रेरक वक्तव्य।') },
  { icon: 'Users', title: p('Community Participation', 'सामुदायिक सहभागिता'), text: p('Open for all — individuals, NGOs, organizations, artisans, and businesses.', 'सबके लिए खुला — व्यक्ति, एनजीओ, संस्थाएँ, कारीगर और व्यवसाय।') },
  { icon: 'Utensils', title: p('Food & Beverages', 'खान-पान'), text: p('Traditional food stalls and local delicacies available.', 'पारंपरिक व्यंजनों और स्थानीय पकवानों के स्टॉल।') },
  { icon: 'HeartHandshake', title: p('Awareness & Social Impact', 'जागरूकता एवं सामाजिक प्रभाव'), text: p('Promote harmony, equality and social change through collective participation.', 'सामूहिक सहभागिता से समरसता, समानता और सामाजिक परिवर्तन को बढ़ावा।') },
]
export const facilities = [
  p('Spacious stall & tent areas', 'विशाल स्टॉल व टेंट क्षेत्र'),
  p('Electricity & basic amenities (subject to confirmation)', 'बिजली व मूलभूत सुविधाएँ (पुष्टि के अधीन)'),
  p('High footfall and exhibition visibility', 'अधिक आगंतुक और महोत्सव में दृश्यता'),
  p('Support from the event management team', 'आयोजन प्रबंधन टीम का सहयोग'),
]
const ex = [
  [p('Spiritual Discourses', 'आध्यात्मिक प्रवचन'), p('Learn from inspiring talks and life lessons.', 'प्रेरक वार्ताओं और जीवन-शिक्षाओं से सीखें।')],
  [p('Cultural Performances', 'सांस्कृतिक प्रस्तुतियाँ'), p('Bhajans, folk artists and traditional art forms.', 'भजन, लोक कलाकार और पारंपरिक कला रूप।')],
  [p('Stall Exhibition', 'स्टॉल महोत्सव'), p('Handicrafts, books, organic products, and more.', 'हस्तशिल्प, पुस्तकें, जैविक उत्पाद और बहुत कुछ।')],
  [p('Food Court', 'फ़ूड कोर्ट'), p('Traditional and regional cuisines.', 'पारंपरिक और क्षेत्रीय व्यंजन।')],
  [p('Community Connect', 'सामुदायिक मेल-जोल'), p('Meet, network and be part of a larger movement.', 'मिलें, जुड़ें और एक बड़े अभियान का हिस्सा बनें।')],
]
export const experiences = ex.map(([title, text], i) => ({ title, text, image: experienceImages[i] }))
