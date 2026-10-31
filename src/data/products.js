// // Product catalogue. SAMPLE entries with indicative prices — replace with real items.
// // To change a photo: paste the image link (https://...) or a file name from src/assets/products/ into `image` below.
// // size / weight are free text pairs; price is a number in rupees.
// import { p } from '../i18n/p'

// export const productCategories = [
//   { id: 'textiles', label: p('Textiles', 'वस्त्र') },
//   { id: 'wood', label: p('Woodcraft', 'काष्ठ शिल्प') },
//   { id: 'metal', label: p('Metalcraft', 'धातु शिल्प') },
//   { id: 'pottery', label: p('Pottery', 'मृद्भांड') },
//   { id: 'books', label: p('Books & Paper', 'पुस्तकें व कागज़') },
// ]

// export const products = [
//   {
//     id: 'stole', category: 'textiles', sample: true,
//     image: 'https://i.pinimg.com/736x/d3/76/78/d3767807fb5afcb8483cb5b7dc227bbb.jpg',
//     name: p('Handwoven Silk Stole', 'हस्तबुनी रेशमी स्टोल'),
//     description: p('Soft handloom stole with a traditional border.', 'पारंपरिक किनारी वाला मुलायम हथकरघा स्टोल।'),
//     size: p('180 × 70 cm', '180 × 70 सेमी'), weight: p('220 g', '220 ग्राम'), price: 1800,
//   },
//   {
//     id: 'bag', category: 'textiles', sample: true,
//     image: 'https://i.pinimg.com/1200x/0f/e1/b5/0fe1b53fbb11e5b767df956cd7fb299d.jpg',
//     name: p('Cotton Block-Print Bag', 'सूती ब्लॉक-प्रिंट थैला'),
//     description: p('Everyday carry bag, hand block-printed.', 'हाथ से ब्लॉक-प्रिंट किया गया रोज़मर्रा का थैला।'),
//     size: p('38 × 40 cm', '38 × 40 सेमी'), weight: p('180 g', '180 ग्राम'), price: 450,
//   },
//   {
//     id: 'toy', category: 'wood', sample: true,
//     image: 'https://i.pinimg.com/736x/b6/b2/6d/b6b26db0aa95172aadd0bb7498e7f1e6.jpg',
//     name: p('Lacquered Wooden Toy Set', 'लाख लगे लकड़ी के खिलौनों का सेट'),
//     description: p('Set of four bright toys with safe, natural colours.', 'सुरक्षित प्राकृतिक रंगों वाले चार चटख खिलौनों का सेट।'),
//     size: p('Each about 10 cm', 'प्रत्येक लगभग 10 सेमी'), weight: p('350 g', '350 ग्राम'), price: 650,
//   },
//   {
//     id: 'box', category: 'wood', sample: true,
//     image: 'https://i.pinimg.com/1200x/67/98/8e/67988e9908fb537fd07d87454a0d7708.jpg',
//     name: p('Carved Keepsake Box', 'नक्काशीदार स्मृति पेटी'),
//     description: p('Hand-carved wooden box with a hinged lid.', 'काज वाले ढक्कन की हाथ से नक्काशी की हुई लकड़ी की पेटी।'),
//     size: p('15 × 10 × 8 cm', '15 × 10 × 8 सेमी'), weight: p('400 g', '400 ग्राम'), price: 900,
//   },
//   {
//     id: 'diya', category: 'metal', sample: true,
//     image: 'https://i.pinimg.com/736x/22/42/33/2242338db472574757c90263b8d1afa9.jpg',
//     name: p('Brass Diya Set', 'पीतल दीपक सेट'),
//     description: p('Set of three engraved brass lamps.', 'तीन नक्काशीदार पीतल के दीपकों का सेट।'),
//     size: p('Each 7 cm wide', 'प्रत्येक 7 सेमी चौड़ा'), weight: p('450 g', '450 ग्राम'), price: 1200,
//   },
//   {
//     id: 'bell', category: 'metal', sample: true,
//     image: 'https://i.pinimg.com/736x/6b/73/39/6b733949518258be8911abefe1461065.jpg',
//     name: p('Hand Bell', 'हस्त घंटी'),
//     description: p('Cast brass bell with a clear tone.', 'स्पष्ट स्वर वाली ढलाई की हुई पीतल की घंटी।'),
//     size: p('12 cm tall', '12 सेमी ऊँची'), weight: p('300 g', '300 ग्राम'), price: 550,
//   },
//   {
//     id: 'pot', category: 'pottery', sample: true,
//     image: 'https://i.pinimg.com/736x/e0/2c/62/e02c620929ac305ae31cda5a35afdae2.jpg',
//     name: p('Terracotta Water Pot', 'टेराकोटा जल पात्र'),
//     description: p('Hand-shaped clay pot that keeps water cool.', 'हाथ से गढ़ा मिट्टी का घड़ा जो पानी ठंडा रखता है।'),
//     size: p('28 cm tall, 22 cm wide', '28 सेमी ऊँचा, 22 सेमी चौड़ा'), weight: p('1.8 kg', '1.8 किग्रा'), price: 700,
//   },
//   {
//     id: 'notebook', category: 'books', sample: true,
//     image: 'https://i.pinimg.com/1200x/70/42/92/704292cacfb093f1a8ac922da8602c03.jpg',
//     name: p('Handmade Paper Notebook', 'हस्तनिर्मित कागज़ की नोटबुक'),
//     description: p('Hand-bound notebook with 120 unlined pages.', 'हाथ से सिली 120 सादे पन्नों की नोटबुक।'),
//     size: p('A5, 21 × 15 cm', 'A5, 21 × 15 सेमी'), weight: p('260 g', '260 ग्राम'), price: 350,
//   },
// ]

import { p } from "../i18n/p";

// Official GI handicraft categories
export const productCategories = [
  {
    id: "painting",
    label: p("Traditional Art & Painting", "पारंपरिक कला एवं चित्रकारी"),
  },
  { id: "wood", label: p("Woodcraft & Toys", "काष्ठ शिल्प एवं खिलौने") },
  { id: "metal", label: p("Metalcraft", "धातु शिल्प") },
  { id: "pottery", label: p("Pottery & Terracotta", "मृद्भांड एवं टेराकोटा") },
  {
    id: "textiles",
    label: p("Textile & Embroidery Crafts", "वस्त्र एवं कढ़ाई शिल्प"),
  },
  { id: "stone", label: p("Stonecraft", "पत्थर शिल्प") },
  { id: "bamboo", label: p("Bamboo & Grass Crafts", "बांस एवं घास शिल्प") },
  { id: "leather", label: p("Leather Crafts", "चमड़ा शिल्प") },
  { id: "glass", label: p("Glass Crafts", "कागज़ शिल्प") },
  { id: "other", label: p("Other Handicrafts", "अन्य हस्तशिल्प") },
];

const makeProduct = (
  id,
  category,
  name,
  description,
  city,
  state,
  image = ""
) => ({
  id,
  category,
  sample: false,
  image,
  giTagged: true,
  name: p(name[0], name[1]),
  description: p(description[0], description[1]),
  city: p(city[0], city[1]),
  state: p(state[0], state[1]),
  size: p("Varies by artisan", "कारीगर के अनुसार अलग-अलग"),
  weight: p("Varies by product", "उत्पाद के अनुसार अलग-अलग"),
  price: null,
});

// 29 GI-tagged handicraft products
export const products = [
  // =========================
  // UTTAR PRADESH - 10 PRODUCTS
  // =========================
  // VARANASI – UTTAR PRADESH

  makeProduct(
    "varanasi-soft-stone-jali",
    "stone",
    ["Varanasi Soft Stone Jali Work", "वाराणसी सॉफ्ट स्टोन जाली वर्क"],
    [
      "Intricate stone carving featuring delicate lattice patterns, decorative panels and traditional architectural designs.",
      "बारीक जालीदार नक्काशी, सजावटी पैनलों और पारंपरिक स्थापत्य डिजाइनों से तैयार की गई उत्कृष्ट पत्थर की कला।",
    ],
    ["Varanasi", "वाराणसी"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/736x/53/3a/a9/533aa9115012a8c639b81a8887e6bd82.jpg"
  ),

  makeProduct(
    "varanasi-wooden-lacquerware-toys",
    "wood",
    ["Varanasi Wooden Lacquerware & Toys", "वाराणसी लकड़ी के लाख के खिलौने"],
    [
      "Traditional wooden toys and lacquerware decorated with colourful finishes and handcrafted detailing.",
      "रंगीन लाख की सजावट और हस्तनिर्मित बारीकियों से तैयार पारंपरिक लकड़ी के खिलौने एवं सजावटी वस्तुएँ।",
    ],
    ["Varanasi", "वाराणसी"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/dc/b2/de/dcb2de22267f04ea88349b0436142ee9.jpg"
  ),

  makeProduct(
    "banaras-metal-repousse-craft",
    "metal",
    ["Banaras Metal Repoussé Craft", "बनारस मेटल रिपोसे क्राफ्ट"],
    [
      "Traditional metal craft featuring raised decorative designs created by skilled artisans through metal shaping.",
      "धातु को विशेष तकनीक से उभारकर कुशल कारीगरों द्वारा बनाए गए पारंपरिक सजावटी धातु शिल्प।",
    ],
    ["Varanasi", "वाराणसी"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/ea/cf/d5/eacfd54e126d51daabadd78e8db1d9a6.jpg"
  ),

  makeProduct(
    "mirzapur-handmade-dari",
    "textiles",
    ["Mirzapur Handmade Dari", "मिर्जापुर हस्तनिर्मित दरी"],
    [
      "Traditional handwoven floor coverings featuring beautiful patterns and skilled weaving craftsmanship.",
      "सुंदर डिजाइनों एवं कुशल बुनाई कला से तैयार की गई पारंपरिक हस्तनिर्मित फर्श की दरियाँ।",
    ],
    ["Mirzapur", "मिर्जापुर"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/9f/dd/d7/9fddd77d08abac3c164638c5003279aa.jpg"
  ),
  makeProduct(
    "banaras-gulabi-meenakari",
    "metal",
    ["Banaras Gulabi Meenakari Craft", "बनारस गुलाबी मीनाकारी शिल्प"],
    [
      "Traditional decorative metalwork with beautiful pink enamel designs.",
      "सुंदर गुलाबी मीनाकारी डिजाइनों वाली पारंपरिक सजावटी धातु कला।",
    ],
    ["Varanasi", "वाराणसी"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/01/6e/5a/016e5adc14713a61e3ec8f6090c277f7.jpg"
  ),

  makeProduct(
    "lucknow-chikankari",
    "textiles",
    ["Lucknow Chikan Craft", "लखनऊ चिकन शिल्प"],
    [
      "Famous delicate hand embroidery featuring traditional floral patterns.",
      "पारंपरिक फूलों के डिजाइनों वाली प्रसिद्ध बारीक हस्तकढ़ाई।",
    ],
    ["Lucknow", "लखनऊ"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/78/97/a2/7897a203ae1b7dabcd5217df759cc783.jpg",
  ),

  makeProduct(
    "chunar-glaze-pottery",
    "pottery",
    ["Chunar Glaze Pottery", "चुनार ग्लेज़ पॉटरी"],
    [
      "Traditional glazed pottery featuring handcrafted decorative ceramics, pots and artistic household items.",
      "हस्तनिर्मित सजावटी सिरेमिक, बर्तनों एवं कलात्मक घरेलू वस्तुओं वाली पारंपरिक चमकदार मिट्टी कला।",
    ],
    ["Chunar, Mirzapur", "चुनार, मिर्जापुर"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/736x/fe/f8/df/fef8df4ac406c40376c513a83343d71e.jpg"
  ),

  makeProduct(
    "mirzapur-pital-bartan",
    "metal",
    ["Mirzapur Pital Bartan", "मिर्जापुर पीतल बर्तन"],
    [
      "Traditional handcrafted brass utensils and decorative metal products made by skilled artisans.",
      "कुशल कारीगरों द्वारा बनाए गए पारंपरिक हस्तनिर्मित पीतल के बर्तन एवं सजावटी धातु उत्पाद।",
    ],
    ["Mirzapur", "मिर्जापुर"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/af/1e/80/af1e8093aef0a88f3c96984e2d797c87.jpg"
  ),

  makeProduct(
    "bhadohi-carpet",
    "textiles",
    ["Handmade Carpets of Bhadohi", "भदोही के हस्तनिर्मित कालीन"],
    [
      "Handwoven carpets featuring detailed patterns and traditional weaving techniques.",
      "विस्तृत डिजाइनों एवं पारंपरिक बुनाई तकनीकों से बने हस्तनिर्मित कालीन।",
    ],
    ["Bhadohi", "भदोही"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/736x/5e/e5/1d/5ee51de896451647c5e89326bd247bc8.jpg"
  ),

  makeProduct(
    "moradabad-metal",
    "metal",
    ["Moradabad Metal Craft", "मुरादाबाद धातु शिल्प"],
    [
      "Famous handcrafted brass and metal decorative products and home accessories.",
      "प्रसिद्ध हस्तनिर्मित पीतल एवं धातु की सजावटी वस्तुएँ और घरेलू उपयोग के उत्पाद।",
    ],
    ["Moradabad", "मुरादाबाद"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/ad/73/28/ad7328c62c446dbe480f0a9fdd502f58.jpg"
  ),

  makeProduct(
    "saharanpur-woodcraft",
    "wood",
    ["Saharanpur Wood Craft", "सहारनपुर काष्ठ शिल्प"],
    [
      "Intricately carved wooden furniture, boxes and decorative handicrafts.",
      "बारीक नक्काशी वाले लकड़ी के फर्नीचर, डिब्बे एवं सजावटी हस्तशिल्प।",
    ],
    ["Saharanpur", "सहारनपुर"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/736x/bd/6b/cb/bd6bcb1d4dc068c76e71acb2f34d94da.jpg"
  ),

  makeProduct(
    "khurja-pottery",
    "pottery",
    ["Khurja Pottery", "खुर्जा कुम्हकारी"],
    [
      "Traditional ceramic pottery, decorative vases and handmade tableware.",
      "पारंपरिक सिरेमिक बर्तन, सजावटी फूलदान एवं हस्तनिर्मित टेबलवेयर।",
    ],
    ["Khurja, Bulandshahr", "खुर्जा, बुलंदशहर"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/77/1b/29/771b290563e31638f415e8af5abf19db.jpg"
  ),

  makeProduct(
    "gorakhpur-terracotta",
    "pottery",
    ["Gorakhpur Terracotta", "गोरखपुर टेराकोटा"],
    [
      "Traditional clay sculptures, decorative figures and handmade terracotta products.",
      "पारंपरिक मिट्टी की मूर्तियाँ, सजावटी आकृतियाँ एवं हस्तनिर्मित टेराकोटा उत्पाद।",
    ],
    ["Gorakhpur", "गोरखपुर"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/80/d6/25/80d62550bb8ecdbb506079c0b8ce3bd8.jpg"
  ),

  makeProduct(
    "nizamabad-black-pottery",
    "pottery",
    ["Nizamabad Black Pottery", "निजामाबाद काली कुम्हकारी"],
    [
      "Distinctive black pottery with engraved silver-pattern decoration.",
      "नक्काशीदार चाँदी जैसे डिजाइनों वाली विशिष्ट काली मिट्टी की कला।",
    ],
    ["Nizamabad, Azamgarh", "निजामाबाद, आजमगढ़"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/03/3e/e5/033ee5d61748286939ff1963a8bbc540.jpg"
  ),

  makeProduct(
    "mathura-sanjhi-craft",
    "painting",
    ["Mathura Sanjhi Craft", "मथुरा सांझी शिल्प"],
    [
      "Traditional paper stencil art depicting beautiful religious and floral designs, especially associated with Krishna traditions.",
      "कागज़ की कटिंग से बनाई जाने वाली पारंपरिक कला, जिसमें विशेष रूप से कृष्ण लीलाओं एवं फूलों के सुंदर डिजाइन दर्शाए जाते हैं।",
    ],
    ["Mathura", "मथुरा"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/eb/6e/27/eb6e271ab21b29cc497842d14047cf67.jpg",
  ),

  makeProduct(
    "firozabad-glass",
    "glass",
    ["Firozabad Glass Craft", "फिरोजाबाद काँच शिल्प"],
    [
      "Traditional glass products, decorative glassware and handcrafted glass items.",
      "पारंपरिक काँच के उत्पाद, सजावटी काँच के बर्तन एवं हस्तनिर्मित काँच की वस्तुएँ।",
    ],
    ["Firozabad", "फिरोजाबाद"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/90/be/f1/90bef1e6ec388de88679af7c0189398f.jpg"
  ),

  makeProduct(
    "mainpuri-tarkashi",
    "wood",
    ["Mainpuri Tarkashi", "मैनपुरी तारकशी"],
    [
      "Traditional wood inlay craft using fine brass wire to create intricate patterns.",
      "बारीक पीतल के तारों से लकड़ी पर सुंदर डिजाइन बनाने वाली पारंपरिक जड़ाई कला।",
    ],
    ["Mainpuri", "मैनपुरी"],
    ["Uttar Pradesh", "उत्तर प्रदेश"],
    "https://i.pinimg.com/1200x/6d/25/d9/6d25d9c1957d2ba56b357310d3521f88.jpg"
  ),

  // =========================
  // ODISHA - 2 PRODUCTS
  // =========================

  makeProduct(
    "konark-stone-carving",
    "stone",
    ["Konark Stone Carving", "कोणार्क पत्थर नक्काशी"],
    [
      "Traditional stone sculptures and decorative carvings made by skilled artisans.",
      "कुशल कारीगरों द्वारा बनाई गई पारंपरिक पत्थर की मूर्तियाँ एवं सजावटी नक्काशी।",
    ],
    ["Konark", "कोणार्क"],
    ["Odisha", "ओडिशा"],
    "https://i.pinimg.com/1200x/7b/91/40/7b9140b0bad194ebe369bba129ecd8f2.jpg"
  ),

  makeProduct(
    "orissa-pattachitra",
    "painting",
    ["Orissa Pattachitra", "ओडिशा पट्टचित्र"],
    [
      "Traditional hand-painted artwork depicting mythology, folklore and cultural heritage.",
      "पौराणिक कथाओं, लोककथाओं एवं सांस्कृतिक विरासत को दर्शाती पारंपरिक हस्तनिर्मित चित्रकला।",
    ],
    ["Raghurajpur, Puri", "रघुराजपुर, पुरी"],
    ["Odisha", "ओडिशा"],
    "https://i.pinimg.com/1200x/60/a8/5e/60a85e2bc678948493bac03f459755a8.jpg"
  ),

  // =========================
  // RAJASTHAN - 3 PRODUCTS
  // =========================

  makeProduct(
    "jaipur-blue-pottery",
    "pottery",
    ["Blue Pottery of Jaipur", "जयपुर की नीली पॉटरी"],
    [
      "Beautiful handcrafted blue ceramic pottery with traditional floral and geometric designs.",
      "पारंपरिक फूलों एवं ज्यामितीय डिजाइनों वाली सुंदर हस्तनिर्मित नीली सिरेमिक कला।",
    ],
    ["Jaipur", "जयपुर"],
    ["Rajasthan", "राजस्थान"],
    "https://i.pinimg.com/1200x/7a/2f/c0/7a2fc0ef123d78ca940b2992db4efa4d.jpg"
  ),

  makeProduct(
    "molela-clay-work",
    "pottery",
    ["Molela Clay Work", "मोलेला क्ले वर्क"],
    [
      "Traditional clay relief plaques and religious decorative terracotta artworks.",
      "पारंपरिक मिट्टी की उभरी हुई पट्टिकाएँ एवं धार्मिक सजावटी टेराकोटा कलाकृतियाँ।",
    ],
    ["Molela, Rajsamand", "मोलेला, राजसमंद"],
    ["Rajasthan", "राजस्थान"],
    "https://i.pinimg.com/736x/80/4e/ff/804eff453406ef035d2b51e7ab4a0286.jpg"
  ),

  makeProduct(
    "kathputli-rajasthan",
    "wood",
    ["Kathputlis of Rajasthan", "राजस्थान की कठपुतलियाँ"],
    [
      "Traditional colourful handmade string puppets representing Rajasthani folk culture.",
      "राजस्थानी लोक संस्कृति को दर्शाने वाली पारंपरिक रंगीन हस्तनिर्मित धागे की कठपुतलियाँ।",
    ],
    ["Rajasthan", "राजस्थान"],
    ["Rajasthan", "राजस्थान"],
    "https://i.pinimg.com/1200x/ce/19/36/ce19369b70d73769b9045315b7bd819d.jpg"
  ),

  // =========================
  // MADHYA PRADESH - 6 PRODUCTS
  // =========================

  makeProduct(
    "leather-toys-indore",
    "leather",
    ["Leather Toys of Indore", "इंदौर के चमड़े के खिलौने"],
    [
      "Traditional handmade leather toys crafted by skilled artisans.",
      "कुशल कारीगरों द्वारा बनाए गए पारंपरिक हस्तनिर्मित चमड़े के खिलौने।",
    ],
    ["Indore", "इंदौर"],
    ["Madhya Pradesh", "मध्य प्रदेश"],
    "https://i.pinimg.com/736x/1b/5f/93/1b5f93029819e196b31a3ba97af6fbb9.jpg"
  ),

  makeProduct(
    "bagh-prints",
    "textiles",
    ["Bagh Prints of Madhya Pradesh", "मध्य प्रदेश के बाघ प्रिंट"],
    [
      "Traditional hand-block printing using natural colours and distinctive patterns.",
      "प्राकृतिक रंगों एवं विशिष्ट डिजाइनों से की जाने वाली पारंपरिक हैंड ब्लॉक प्रिंटिंग।",
    ],
    ["Bagh, Dhar", "बाघ, धार"],
    ["Madhya Pradesh", "मध्य प्रदेश"],
    "https://i.pinimg.com/1200x/79/54/ce/7954ce56777b1246f9850527c3daf7cb.jpg"
  ),

  makeProduct(
    "datia-bell-metal",
    "metal",
    [
      "Bell Metal Ware of Datia and Tikamgarh",
      "दतिया एवं टीकमगढ़ के बेल मेटल उत्पाद",
    ],
    [
      "Traditional handcrafted bell-metal utensils and decorative objects.",
      "पारंपरिक हस्तनिर्मित बेल मेटल के बर्तन एवं सजावटी वस्तुएँ।",
    ],
    ["Datia & Tikamgarh", "दतिया एवं टीकमगढ़"],
    ["Madhya Pradesh", "मध्य प्रदेश"],
    "https://i.pinimg.com/1200x/a6/0f/53/a60f5365c893cf7a1387f91fd13030dd.jpg"
  ),

  makeProduct(
    "gond-painting",
    "painting",
    ["Gond Painting of Madhya Pradesh", "मध्य प्रदेश की गोंड चित्रकारी"],
    [
      "Traditional tribal paintings featuring nature, animals and folklore through intricate patterns.",
      "जटिल डिजाइनों के माध्यम से प्रकृति, पशुओं एवं लोककथाओं को दर्शाने वाली पारंपरिक आदिवासी चित्रकला।",
    ],
    ["Mandla / Dindori region", "मंडला / डिंडोरी क्षेत्र"],
    ["Madhya Pradesh", "मध्य प्रदेश"],
    "https://i.pinimg.com/736x/ad/91/6a/ad916adf762c84e4cfec206a2706ec7e.jpg"
  ),

  makeProduct(
    "dindori-wrought-iron",
    "metal",
    ["Wrought Iron Crafts of Dindori", "डिंडोरी का रॉट आयरन शिल्प"],
    [
      "Tribal iron artworks and handmade decorative metal sculptures.",
      "आदिवासी लौह कलाकृतियाँ एवं हस्तनिर्मित सजावटी धातु की मूर्तियाँ।",
    ],
    ["Dindori", "डिंडोरी"],
    ["Madhya Pradesh", "मध्य प्रदेश"],
          "https://i.pinimg.com/736x/d7/5c/3a/d75c3aff81d120638afc54c8f415fa35.jpg"

  ),

  makeProduct(
    "jabalpur-stone-craft",
    "stone",
    ["Jabalpur Stone Craft", "जबलपुर पत्थर शिल्प"],
    [
      "Handcrafted stone sculptures and decorative stone artworks.",
      "हस्तनिर्मित पत्थर की मूर्तियाँ एवं सजावटी पत्थर की कलाकृतियाँ।",
    ],
    ["Jabalpur", "जबलपुर"],
    ["Madhya Pradesh", "मध्य प्रदेश"],
    "https://i.pinimg.com/736x/84/5e/03/845e037c23f1d4538a2aa338fb618d16.jpg"
    
  ),

  // =========================
  // JHARKHAND - 2 PRODUCTS
  // =========================

  makeProduct(
    "sohrai-khovar",
    "painting",
    ["Sohrai-Khovar Painting", "सोहराई-खोवर चित्रकारी"],
    [
      "Traditional tribal wall art created using natural colours and cultural motifs.",
      "प्राकृतिक रंगों एवं सांस्कृतिक आकृतियों से बनाई जाने वाली पारंपरिक आदिवासी दीवार चित्रकला।",
    ],
    ["Hazaribagh", "हजारीबाग"],
    ["Jharkhand", "झारखंड"],
    "https://i.pinimg.com/736x/b9/ee/b4/b9eeb4385eed69be39625ecb341d27cb.jpg"
  ),

  makeProduct(
    "jharkhand-bamboo-crafts",
    "bamboo",
    ["Bamboo Crafts of Jharkhand", "झारखंड के बांस शिल्प"],
    [
      "Traditional handmade bamboo products and decorative utility crafts.",
      "पारंपरिक हस्तनिर्मित बांस के उत्पाद एवं सजावटी उपयोगी शिल्प।",
    ],
    ["Jharkhand", "झारखंड"],
    ["Jharkhand", "झारखंड"],
    "https://i.pinimg.com/736x/42/3a/71/423a71d3f5282949ed110b41cce30a02.jpg"
  ),

  // =========================
  // BIHAR - 3 PRODUCTS
  // =========================

  makeProduct(
    "madhubani-painting",
    "painting",
    ["Madhubani Paintings", "मधुबनी चित्रकारी"],
    [
      "Famous folk paintings featuring traditional motifs, nature and mythological stories.",
      "पारंपरिक आकृतियों, प्रकृति एवं पौराणिक कथाओं को दर्शाने वाली प्रसिद्ध लोक चित्रकला।",
    ],
    ["Madhubani", "मधुबनी"],
    ["Bihar", "बिहार"],
    "https://i.pinimg.com/1200x/e7/28/95/e72895868f8e54572fab944996f52d0c.jpg"
  ),

  makeProduct(
    "sujini-embroidery",
    "textiles",
    ["Sujini Embroidery Work of Bihar", "बिहार का सुजनी कढ़ाई कार्य"],
    [
      "Traditional hand embroidery used to create beautiful stitched textile artworks.",
      "सुंदर सिलाईदार वस्त्र कलाकृतियाँ बनाने वाली पारंपरिक हस्तकढ़ाई।",
    ],
    ["Bihar", "बिहार"],
    ["Bihar", "बिहार"],
    "https://i.pinimg.com/1200x/9c/91/c3/9c91c3b92b53067a1fdb85bbf76fde42.jpg"
  ),

  makeProduct(
    "sikki-grass-products",
    "bamboo",
    ["Sikki Grass Products of Bihar", "बिहार के सिक्की घास उत्पाद"],
    [
      "Handcrafted baskets, boxes, decorative figures and utility products made from Sikki grass.",
      "सिक्की घास से बनी हस्तनिर्मित टोकरियाँ, डिब्बे, सजावटी आकृतियाँ एवं उपयोगी वस्तुएँ।",
    ],
    ["Madhubani region", "मधुबनी क्षेत्र"],
    ["Bihar", "बिहार"],
    "https://i.pinimg.com/736x/ba/f5/42/baf542ba02adc0d151e6f5357972493c.jpg"
  ),

  // =========================
  // WEST BENGAL - 3 PRODUCTS
  // =========================

  makeProduct(
    "bankura-terracotta",
    "pottery",
    ["Bankura Panchmura Terracotta Craft", "बांकुड़ा पंचमूड़ा टेराकोटा शिल्प"],
    [
      "Famous handmade terracotta horses, sculptures and decorative clay objects.",
      "प्रसिद्ध हस्तनिर्मित टेराकोटा घोड़े, मूर्तियाँ एवं सजावटी मिट्टी की वस्तुएँ।",
    ],
    ["Panchmura, Bankura", "पंचमूड़ा, बांकुड़ा"],
    ["West Bengal", "पश्चिम बंगाल"],
    "https://i.pinimg.com/736x/09/26/a4/0926a4486f3d978441035f9824ef0c04.jpg"
  ),

  makeProduct(
    "bengal-dokra",
    "metal",
    ["Bengal Dokra", "बंगाल डोकरा"],
    [
      "Traditional lost-wax metal casting craft used to create tribal figures and decorative objects.",
      "पारंपरिक धातु ढलाई कला, जिससे आदिवासी आकृतियाँ एवं सजावटी वस्तुएँ बनाई जाती हैं।",
    ],
    ["Bankura / Bikna", "बांकुड़ा / बिकना"],
    ["West Bengal", "पश्चिम बंगाल"],
    "https://i.pinimg.com/736x/fa/46/7a/fa467aa349eb8772674ad384551ac3d1.jpg"
  ),

  makeProduct(
    "purulia-chhau-mask",
    "other",
    ["Purulia Chau Mask", "पुरुलिया छऊ मुखौटा"],
    [
      "Colourful handmade masks used in the traditional Chhau dance of Bengal.",
      "बंगाल के पारंपरिक छऊ नृत्य में उपयोग किए जाने वाले रंगीन हस्तनिर्मित मुखौटे।",
    ],
    ["Charida, Purulia", "चरिदा, पुरुलिया"],
    ["West Bengal", "पश्चिम बंगाल"],
    "https://i.pinimg.com/736x/e8/33/62/e8336205997ad9b50a20f5dec9003c47.jpg"
  ),
];
