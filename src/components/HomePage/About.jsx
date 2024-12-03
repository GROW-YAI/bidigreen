import plant from "../../assets/images/plant.jpg";
import Navbar from "../../Shared/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: `url(${plant})` }}
      >
    
        <div className="absolute  inset-0 flex flex-col items-center justify-center text-center px-4 ">
          <li className="text-3xl font-bold text-white underline py-5">About Us</li>
        </div>
      </div>
    </div>
  );
};

export default About;
