import React, { useState } from 'react'
import './App.scss'
import Hero from './components/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Testemonies from './components/Testemonies'
import Footer from './components/Footer'

function App() {
  AOS.init()
  const [dark, setDark] = useState(false)

  const toggleTheme = () => {
    setDark(!dark)
    console.log(dark)
  }

  return (
    <div>
      {dark ? (
        <div className='light'>
          <Hero toggleTheme={toggleTheme} />
          <About />
          <Projects />
          <Contact />
          <Testemonies />
          <Footer />
        </div>
      ) : (
        <div className='dark'>
          <Hero toggleTheme={toggleTheme} />
          <About />
          <Projects />
          <Contact />
          <Testemonies />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default App
