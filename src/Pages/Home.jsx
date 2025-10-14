import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import AboutTeam from "../components/AboutTeam";
import Products from "../components/Products";

export default function Home  () {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <AboutTeam />
      <Team />
    </div>
  );
};

