
import './index.css'

//import Home from './pages/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/contact'
import Home from './pages/home'
import Navbar from './component/navbar'
import About from './pages/about'
import Features from './pages/features'

function App() {
 

  return (
  <BrowserRouter>
  <Navbar />
  
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App
