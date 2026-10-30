import { p } from '../i18n/p'
// All images are resolved here. To use your own banner, drop ONE file into src/assets/banner/
const banners = import.meta.glob('../assets/banner/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const customBanner = Object.values(banners)[0]
export const img = (n) => new URL(`../assets/exhibition/${n}.jpg`, import.meta.url).href
export const hasCustomBanner = Boolean(customBanner)
export const experienceImages = [1,2,3,4,5].map((n) => img('card' + n))
export const gallery = [1,2,3,4,5].map((n,i)=>({src:img('gal'+n),alt:[p('Spiritual gathering','आध्यात्मिक सभा'),p('Cultural performance','सांस्कृतिक प्रस्तुति'),p('Exhibition stalls','प्रदर्शनी स्टॉल'),p('Food area','खान-पान क्षेत्र'),p('Community participation','सामुदायिक सहभागिता')][i]}))
export const images = { hero: customBanner || img('hero'), about: img('about'), stall: img('stall'), location: img('location') }

// Product and artisan photos: look up by file name inside src/assets/products and src/assets/artisans
const prod = import.meta.glob('../assets/products/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const art = import.meta.glob('../assets/artisans/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const find = (g, name) => (name ? Object.entries(g).find(([k]) => k.endsWith('/' + name))?.[1] : undefined)
export const productImage = (name) => find(prod, name)
export const artisanImage = (name) => find(art, name)
