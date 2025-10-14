import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Pages/About";
import Services from "./components/Services";
import ContactUs from "./Pages/Contactus";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
   
      <Router>
         <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
         <Footer />
         </div>
      </Router>
     
   
  );
}

export default App;
