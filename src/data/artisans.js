// Artisan & craft groups. These are SAMPLE entries (sample: true shows a "Sample" badge) — replace with real artisans.
// Photo: put a file in src/assets/artisans/ and set image to its file name, e.g. image: 'weavers.jpg'
import { p } from "../i18n/p";
export const artisans = [
  {
    id: "weavers",
    icon: "Shirt",
    sample: true,
    image: "banarasi-weavers",
    name: p("Banarasi Weavers Group", "बनारसी बुनकर समूह"),
    craft: p("Handloom silk & cotton", "हथकरघा रेशम व सूती वस्त्र"),
    place: p("Varanasi", "वाराणसी"),
    story: p(
      "Families who have woven fine fabrics on handlooms for generations, keeping traditional motifs alive.",
      "वे परिवार जो पीढ़ियों से हथकरघे पर महीन वस्त्र बुन रहे हैं और पारंपरिक अलंकरण को जीवित रखे हुए हैं।",
    ),
    tags: [
      p("Stoles", "स्टोल"),
      p("Dupattas", "दुपट्टे"),
      p("Fabric", "कपड़ा"),
    ],
  },
  {
    id: "wood",
    icon: "TreePine",
    sample: true,
    image: "kashi-wood-toys",
    name: p("Kashi Wood Toy Makers", "काशी काष्ठ खिलौना निर्माता"),
    craft: p("Lacquered wooden toys", "लाख लगे लकड़ी के खिलौने"),
    place: p("Varanasi", "वाराणसी"),
    story: p(
      "Artisans turning and colouring wood into safe, bright toys and decorative pieces.",
      "कारीगर लकड़ी को तराशकर सुरक्षित, चटख रंगों के खिलौने और सजावटी वस्तुएँ बनाते हैं।",
    ),
    tags: [p("Toys", "खिलौने"), p("Decor", "सजावट")],
  },
  {
    id: "metal",
    icon: "Flame",
    sample: true,
    image: "brass-metal",
    name: p("Brass & Metal Artisans", "पीतल एवं धातु शिल्पी"),
    craft: p("Cast and engraved brass", "ढलाई व नक्काशीदार पीतल"),
    place: p("Uttar Pradesh", "उत्तर प्रदेश"),
    story: p(
      "Metalworkers crafting lamps, bells and ritual items by hand.",
      "धातु शिल्पी दीपक, घंटियाँ और पूजा सामग्री हाथ से बनाते हैं।",
    ),
    tags: [p("Diyas", "दीये"), p("Puja items", "पूजा सामग्री")],
  },
  {
    id: "pottery",
    icon: "Amphora",
    sample: true,
    image: "terracotta-potters",
    name: p("Terracotta Potters Group", "टेराकोटा कुम्हार समूह"),
    craft: p("Hand-shaped clay ware", "हाथ से गढ़े मिट्टी के बर्तन"),
    place: p("Eastern UP", "पूर्वी उत्तर प्रदेश"),
    story: p(
      "Potters shaping and firing earthen items that are both useful and beautiful.",
      "कुम्हार मिट्टी की उपयोगी और सुंदर वस्तुएँ गढ़कर पकाते हैं।",
    ),
    tags: [p("Pots", "घड़े"), p("Planters", "गमले")],
  },
];
