// Product catalogue. SAMPLE entries with indicative prices — replace with real items.
// To change a photo: paste the image link (https://...) or a file name from src/assets/products/ into `image` below.
// size / weight are free text pairs; price is a number in rupees.
import { p } from '../i18n/p'

export const productCategories = [
  { id: 'textiles', label: p('Textiles', 'वस्त्र') },
  { id: 'wood', label: p('Woodcraft', 'काष्ठ शिल्प') },
  { id: 'metal', label: p('Metalcraft', 'धातु शिल्प') },
  { id: 'pottery', label: p('Pottery', 'मृद्भांड') },
  { id: 'books', label: p('Books & Paper', 'पुस्तकें व कागज़') },
]

export const products = [
  {
    id: 'stole', category: 'textiles', sample: true,
    image: 'https://i.pinimg.com/736x/d3/76/78/d3767807fb5afcb8483cb5b7dc227bbb.jpg',
    name: p('Handwoven Silk Stole', 'हस्तबुनी रेशमी स्टोल'),
    description: p('Soft handloom stole with a traditional border.', 'पारंपरिक किनारी वाला मुलायम हथकरघा स्टोल।'),
    size: p('180 × 70 cm', '180 × 70 सेमी'), weight: p('220 g', '220 ग्राम'), price: 1800,
  },
  {
    id: 'bag', category: 'textiles', sample: true,
    image: 'https://i.pinimg.com/1200x/0f/e1/b5/0fe1b53fbb11e5b767df956cd7fb299d.jpg',
    name: p('Cotton Block-Print Bag', 'सूती ब्लॉक-प्रिंट थैला'),
    description: p('Everyday carry bag, hand block-printed.', 'हाथ से ब्लॉक-प्रिंट किया गया रोज़मर्रा का थैला।'),
    size: p('38 × 40 cm', '38 × 40 सेमी'), weight: p('180 g', '180 ग्राम'), price: 450,
  },
  {
    id: 'toy', category: 'wood', sample: true,
    image: 'https://i.pinimg.com/736x/b6/b2/6d/b6b26db0aa95172aadd0bb7498e7f1e6.jpg',
    name: p('Lacquered Wooden Toy Set', 'लाख लगे लकड़ी के खिलौनों का सेट'),
    description: p('Set of four bright toys with safe, natural colours.', 'सुरक्षित प्राकृतिक रंगों वाले चार चटख खिलौनों का सेट।'),
    size: p('Each about 10 cm', 'प्रत्येक लगभग 10 सेमी'), weight: p('350 g', '350 ग्राम'), price: 650,
  },
  {
    id: 'box', category: 'wood', sample: true,
    image: 'https://i.pinimg.com/1200x/67/98/8e/67988e9908fb537fd07d87454a0d7708.jpg',
    name: p('Carved Keepsake Box', 'नक्काशीदार स्मृति पेटी'),
    description: p('Hand-carved wooden box with a hinged lid.', 'काज वाले ढक्कन की हाथ से नक्काशी की हुई लकड़ी की पेटी।'),
    size: p('15 × 10 × 8 cm', '15 × 10 × 8 सेमी'), weight: p('400 g', '400 ग्राम'), price: 900,
  },
  {
    id: 'diya', category: 'metal', sample: true,
    image: 'https://i.pinimg.com/736x/22/42/33/2242338db472574757c90263b8d1afa9.jpg',
    name: p('Brass Diya Set', 'पीतल दीपक सेट'),
    description: p('Set of three engraved brass lamps.', 'तीन नक्काशीदार पीतल के दीपकों का सेट।'),
    size: p('Each 7 cm wide', 'प्रत्येक 7 सेमी चौड़ा'), weight: p('450 g', '450 ग्राम'), price: 1200,
  },
  {
    id: 'bell', category: 'metal', sample: true,
    image: 'https://i.pinimg.com/736x/6b/73/39/6b733949518258be8911abefe1461065.jpg',
    name: p('Hand Bell', 'हस्त घंटी'),
    description: p('Cast brass bell with a clear tone.', 'स्पष्ट स्वर वाली ढलाई की हुई पीतल की घंटी।'),
    size: p('12 cm tall', '12 सेमी ऊँची'), weight: p('300 g', '300 ग्राम'), price: 550,
  },
  {
    id: 'pot', category: 'pottery', sample: true,
    image: 'https://i.pinimg.com/736x/e0/2c/62/e02c620929ac305ae31cda5a35afdae2.jpg',
    name: p('Terracotta Water Pot', 'टेराकोटा जल पात्र'),
    description: p('Hand-shaped clay pot that keeps water cool.', 'हाथ से गढ़ा मिट्टी का घड़ा जो पानी ठंडा रखता है।'),
    size: p('28 cm tall, 22 cm wide', '28 सेमी ऊँचा, 22 सेमी चौड़ा'), weight: p('1.8 kg', '1.8 किग्रा'), price: 700,
  },
  {
    id: 'notebook', category: 'books', sample: true,
    image: 'https://i.pinimg.com/1200x/70/42/92/704292cacfb093f1a8ac922da8602c03.jpg',
    name: p('Handmade Paper Notebook', 'हस्तनिर्मित कागज़ की नोटबुक'),
    description: p('Hand-bound notebook with 120 unlined pages.', 'हाथ से सिली 120 सादे पन्नों की नोटबुक।'),
    size: p('A5, 21 × 15 cm', 'A5, 21 × 15 सेमी'), weight: p('260 g', '260 ग्राम'), price: 350,
  },
]