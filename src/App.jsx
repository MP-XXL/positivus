// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero';
import Nav_bar from './components/Nav_bar';
import Services from './components/Services';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav_bar />
      <Hero />
      <Services />
    </>
  )
}

export default App
