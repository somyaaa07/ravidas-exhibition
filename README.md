# Sant Ravidas Ji Exhibition

Run: `npm install` then `npm run dev` · Build: `npm run build`

## Where to change things
| I want to change… | Edit |
|---|---|
| Dates, venue, phone, email, map link | `src/data/event.js` |
| Menu links | `src/data/navigation.js` |
| Page text (about pillars, feature cards, facilities, experience cards) | `src/data/content.js` |
| Hero banner | drop one image into `src/assets/banner/` |
| Other photos | replace files in `src/assets/exhibition/` (same names) |
| Registration options, steps, limits, sidebar text | `src/data/registration.js` |
| Registration validation rules | `src/utils/validation.js` |
| Where registrations are sent | `src/services/submitRegistration.js` + `.env` (`VITE_REGISTRATION_ENDPOINT`) |
| Colours and fonts | `src/styles/index.css` (`@theme`) |

## Structure
```
src/
  assets/      banner/ decorative/ exhibition/
  components/  layout/ (Navbar, Logo, Footer)  ui/ (form controls)  decor/ (SVG art)  animation/
  sections/    Hero About Exhibition Stall Expect Gallery Location Registration (one folder each)
  data/        all editable content and config
  hooks/       useRegistrationForm.js
  services/    backend submission
  utils/       validation.js
  styles/      index.css
```

## Languages (English / हिन्दी)
A toggle in the navbar switches the whole site. Every text is a pair: `p('English', 'हिन्दी')` (see `src/i18n/p.js`).
- Fixed page text: `src/data/ui.js` · Menu: `navigation.js` · Event: `event.js` · Cards/lists: `content.js`
- Artisans: `src/data/artisans.js` (photos in `src/assets/artisans/`) · Products: `src/data/products.js` (photos in `src/assets/products/`)
- Set `sample: false` (or delete it) on an item to remove its "Sample" badge. Sample artisans/products/prices are placeholders.
- To add a third language: add it in `src/i18n/LanguageContext.jsx` (`LANGS`) and add a key to each `p()` pair.
