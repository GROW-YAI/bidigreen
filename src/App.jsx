import { Route,  BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./Pages/HomeP"
import About from "./components/HomePage/About"
import Services from "./components/HomePage/Services"
import ContactUs from "./components/HomePage/Contactus"




function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
