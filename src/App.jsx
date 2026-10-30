import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Exhibition from './sections/Exhibition/Exhibition'
import Stall from './sections/Stall/Stall'
import Expect from './sections/Expect/Expect'
import Gallery from './sections/Gallery/Gallery'
import Registration from './sections/Registration/RegistrationSection'
import Location from './sections/Location/Location'
export default function App() {
  return (<><Navbar /><main><Hero /><About /><Exhibition /><Stall /><Expect /><Gallery /><Registration /><Location /></main><Footer /></>)
}
