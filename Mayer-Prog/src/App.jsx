import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from '/workspaces/webdev-props-lab-mayer/Mayer-Prog/components/Header.jsx'
import Hero from '/workspaces/webdev-props-lab-mayer/Mayer-Prog/components/Hero.jsx'
import CourseList from '/workspaces/webdev-props-lab-mayer/Mayer-Prog/components/CourseList.jsx'
import TestimonialList from '/workspaces/webdev-props-lab-mayer/Mayer-Prog/components/TestimonialList.jsx'
import Footer from '/workspaces/webdev-props-lab-mayer/Mayer-Prog/components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* ==================== HEADER ==================== */}
  <Header />
  {/* ==================== HERO ==================== */}
  <Hero />
  
  {/* ==================== COURSES ==================== */}
  <CourseList />
  {/* ==================== TESTIMONIALS ==================== */}
  <TestimonialList />
  {/* ==================== FOOTER ==================== */}
   <Footer />
</>

  )
}

export default App
