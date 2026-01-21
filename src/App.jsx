import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Components/Hero'
import Tea from './Components/Tea'
import Locations from './Components/Locations'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}> </Route>
          <Route path="/hero" element={<Hero />} > </Route>
          <Route path="/tea" element={<Tea />} > </Route>
          <Route path="/locations" element={<Locations />} > </Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
