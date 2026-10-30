// Artisan & craft groups. These are SAMPLE entries (sample: true shows a "Sample" badge) — replace with real artisans.
// To change a photo: paste the image link (https://...) or a file name from src/assets/artisans/ into `image` below.
import { p } from '../i18n/p'

export const artisans = [
  {
    id: 'weavers', icon: '', sample: true,
    image: 'https://i.pinimg.com/1200x/89/28/60/892860dd73f77d6d84d5fbe9c8074ace.jpg',
    name: p('Banarasi Weavers Group', 'बनारसी बुनकर समूह'),
    craft: p('Handloom silk & cotton', 'हथकरघा रेशम व सूती वस्त्र'),
    place: p('Varanasi', 'वाराणसी'),
    story: p('Families who have woven fine fabrics on handlooms for generations, keeping traditional motifs alive.', 'वे परिवार जो पीढ़ियों से हथकरघे पर महीन वस्त्र बुन रहे हैं और पारंपरिक अलंकरण को जीवित रखे हुए हैं।'),
    tags: [p('Stoles', 'स्टोल'), p('Dupattas', 'दुपट्टे'), p('Fabric', 'कपड़ा')],
  },
  {
    id: 'wood', icon: 'TreePine', sample: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUScWFhknGKlu5_fuMNjl-V9H-ObcQxk5qCpVnWJuuw&s=10',
    name: p('Kashi Wood Toy Makers', 'काशी काष्ठ खिलौना निर्माता'),
    craft: p('Lacquered wooden toys', 'लाख लगे लकड़ी के खिलौने'),
    place: p('Varanasi', 'वाराणसी'),
    story: p('Artisans turning and colouring wood into safe, bright toys and decorative pieces.', 'कारीगर लकड़ी को तराशकर सुरक्षित, चटख रंगों के खिलौने और सजावटी वस्तुएँ बनाते हैं।'),
    tags: [p('Toys', 'खिलौने'), p('Decor', 'सजावट')],
  },
  {
    id: 'metal', icon: 'Flame', sample: true,
    image: 'https://i.pinimg.com/1200x/a6/0f/53/a60f5365c893cf7a1387f91fd13030dd.jpg',
    name: p('Brass & Metal Artisans', 'पीतल एवं धातु शिल्पी'),
    craft: p('Cast and engraved brass', 'ढलाई व नक्काशीदार पीतल'),
    place: p('Uttar Pradesh', 'उत्तर प्रदेश'),
    story: p('Metalworkers crafting lamps, bells and ritual items by hand.', 'धातु शिल्पी दीपक, घंटियाँ और पूजा सामग्री हाथ से बनाते हैं।'),
    tags: [p('Diyas', 'दीये'), p('Puja items', 'पूजा सामग्री')],
  },
  {
    id: 'pottery', icon: 'Amphora', sample: true,
    image: 'https://i.pinimg.com/1200x/67/b2/22/67b2223551dd572f5ae515e7173dc806.jpg',
    name: p('Terracotta Potters Group', 'टेराकोटा कुम्हार समूह'),
    craft: p('Hand-shaped clay ware', 'हाथ से गढ़े मिट्टी के बर्तन'),
    place: p('Eastern UP', 'पूर्वी उत्तर प्रदेश'),
    story: p('Potters shaping and firing earthen items that are both useful and beautiful.', 'कुम्हार मिट्टी की उपयोगी और सुंदर वस्तुएँ गढ़कर पकाते हैं।'),
    tags: [p('Pots', 'घड़े'), p('Planters', 'गमले')],
  },
]