import '../src/index.css'
import AboutUs from './components/AboutUs'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Services2 from './components/Services2'

function App() {

  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <Navbar />
        <Home />
        <AboutUs />
        <Services />
        <Services2 />
        <FAQ />
        <Reviews />
        <Footer />
      </div>
    </>
  )
}

export default App
