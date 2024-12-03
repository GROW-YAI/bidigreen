// import bgImage from "../../assets/images/bgImage.png";
import backgroundImage from "../../assets/images/backgroundImage.jpg"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  const texts = [
    "BIDIGREEN SMOKELESS CHARCOAL!!!!" ,
  
    "Turning crop waste into clean energy",
  ];

  const textRefs = useRef([]);

  useEffect(() => {
    if (textRefs.current.length > 0) {
      // GSAP animation to fade in each text line with a stagger effect
      gsap.fromTo(
        textRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="relative w-full bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${backgroundImage})` }}>
      
        <div
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"
          aria-hidden="true"
        ></div>
    

      {/* Overlay Content */}
      <div className=" absolute  inset-0 flex flex-col items-center justify-center text-center px-4 ">
        <div className="text-white">
          {texts.map((text, index) => (
            <div
              key={index}
              ref={(el) => (textRefs.current[index] = el)}
              className="text-xl md:text-3xl lg:text-5xl font-bold mb-4 "
            >
              {text}
            </div>
          ))}
        </div>
        {/* Call-to-Action Button */}
        <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg md:text-xl font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-400" onClick={() => navigate("/about")}>
          Learn More
        </button>
      </div> 
    </div>
  );
};

export default Hero;
