import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Header />
      <Projects />
      <About />
    </>
  )
}

export default App
