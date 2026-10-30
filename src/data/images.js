import { p } from "../i18n/p";
// All images are resolved here. To use your own banner, drop ONE file into src/assets/banner/
const banners = import.meta.glob('../assets/banner/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
 
const customBanner = Object.values(banners)[0]
export const img = (n) => new URL(`../assets/exhibition/${n}.png`, import.meta.url).href
export const hasCustomBanner = Boolean(customBanner)
export const experienceImages = [
  'https://i.pinimg.com/736x/f5/3a/a7/f53aa780ce53d921089ef750a317d63d.jpg',
  'https://i.pinimg.com/1200x/3f/4c/9d/3f4c9d51c15421044ced280627e48e7d.jpg',
  'https://i.pinimg.com/736x/7f/f7/91/7ff7919b27ebb223908f748428ad3b56.jpg',
  'https://i.pinimg.com/1200x/7a/7e/56/7a7e568645e4292221b548958c79723a.jpg',
  'https://i.pinimg.com/736x/a2/4c/41/a24c41e40a606f399ab9d6f392cfb9b6.jpg',
]
export const gallery = [
  {
    src: 'https://i.pinimg.com/736x/fa/0d/ed/fa0ded0cecc44d44994959eeeca51dd7.jpg',
    alt: p('Spiritual gathering', 'आध्यात्मिक सभा'),
  },
  {
    src: 'https://i.pinimg.com/736x/e0/e5/a4/e0e5a499f274e2565d4ddb83f0adbfbb.jpg',
    alt: p('Cultural performance', 'सांस्कृतिक प्रस्तुति'),
  },
  {
    src: 'https://i.pinimg.com/736x/4a/c2/6b/4ac26bda5717cf895372524296176c57.jpg',
    alt: p('Exhibition stalls', 'प्रदर्शनी स्टॉल'),
  },
  {
    src: 'https://i.pinimg.com/1200x/c7/b0/f9/c7b0f905e7f9e683a38a5d71dead6cc7.jpg',
    alt: p('Food area', 'खान-पान क्षेत्र'),
  },
//   {
//     src: '/images/community.jpg',
//     alt: p('Community participation', 'सामुदायिक सहभागिता'),
//   },
]

const heroBg = new URL('../assets/banner/banner.png', import.meta.url).href
export const images = { hero: customBanner || img('hero'), about: img('about'), stall: img('stall'), location: img('location') }

// Product and artisan photos: look up by file name inside src/assets/products and src/assets/artisans
const prod = import.meta.glob("../assets/products/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});
const art = import.meta.glob("../assets/artisans/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});
const find = (g, name) =>
  name
    ? Object.entries(g).find(([k]) => k.endsWith("/" + name))?.[1]
    : undefined;
export const productImage = (name) => find(prod, name);
export const artisanImage = (name) => find(art, name);
