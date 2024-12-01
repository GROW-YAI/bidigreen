
import Hero from "../../components/HomePage/Hero";
import About from "../../components/HomePage/About";
import Services from "../../components/HomePage/Services";
import Team from "../../components/HomePage/Team";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const HomePage = () => {
 

  return (
    <div>

      
      <Navbar />
      <Hero />
      <About/>
      <Team />
      <Footer />
    </div>
  );
};

export default HomePage;
