import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FAQ from './components/FAQ.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Pricing />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <FloatingWhatsApp />
    </>
  )
}
