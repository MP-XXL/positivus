// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Case_study from './components/Case_study';
import Contact_us from './components/Contact_us';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav_bar from './components/Nav_bar';
import Our_working_process from './components/Our_working_process';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav_bar />
      <Hero />
      <Services />
      <Case_study />
      <Our_working_process />
      <Team />
      <Testimonials />
      <Contact_us />
      <Footer />
    </>
  )
}

export default App
