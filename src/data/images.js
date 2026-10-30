// All images are resolved here. To use your own banner, drop ONE file into src/assets/banner/
const banners = import.meta.glob('../assets/banner/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
const customBanner = Object.values(banners)[0]
export const img = (n) => new URL(`../assets/exhibition/${n}.jpg`, import.meta.url).href
export const hasCustomBanner = Boolean(customBanner)
export const experienceImages = [1,2,3,4,5].map((n) => img('card' + n))
export const gallery = [1,2,3,4,5].map((n,i)=>({src:img('gal'+n),alt:['Spiritual gathering','Cultural performance','Exhibition stalls','Food area','Community participation'][i]}))
export const images = { hero: customBanner || img('hero'), about: img('about'), stall: img('stall'), location: img('location') }
