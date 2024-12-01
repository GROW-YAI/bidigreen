
import Hero from "../../components/HomePage/Hero";
import Services from "../../components/HomePage/Services";
import Team from "../../components/HomePage/Team";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import AboutTeam from "../../components/HomePage/AboutTeam";

const HomePage = () => {
 

  return (
    <div>

      
      <Navbar />
      <Hero />
      <Services/>
      <AboutTeam/>
      <Team />
      <Footer/>
      
    </div>
  );
};

export default HomePage;
