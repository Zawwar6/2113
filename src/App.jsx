import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CtaSection from './components/CtaSection'
const App = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Services/>
    <ChooseUs/>
    <About/>
    <CtaSection/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App