import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Exhibition from './sections/Exhibition/Exhibition'
import Artisans from './sections/Artisans/Artisans'
import Products from './sections/Products/Products'
import Stall from './sections/Stall/Stall'
import Expect from './sections/Expect/Expect'
import Gallery from './sections/Gallery/Gallery'
import Registration from './sections/Registration/RegistrationSection'
import Location from './sections/Location/Location'
import { LanguageProvider } from './i18n/LanguageContext'
export default function App() {
  return (<LanguageProvider><Navbar /><main>
    <Hero /><About /><Exhibition /><Artisans /><Products /><Stall /><Expect /><Gallery /><Registration /><Location />
  </main><Footer /></LanguageProvider>)
}
