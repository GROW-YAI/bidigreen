import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import charcoal from "../../assets/images/charcoal.jpg";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-full max-w-sm p-4">
      <img
        src={charcoal}
        alt="Produce"
        className="object-cover w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 text-center md:px-8 md:text-left">
      <h1 className="mb-4 text-3xl font-bold text-green-800 md:text-4xl">
        Quality Products
      </h1>
      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
        At Bidigreen Ghana Limited, we are transforming the way charcoal is
        produced and consumed. As a forward-thinking company rooted in
        sustainability and innovation, we specialize in producing high-quality
        charcoal from agro-waste materials such as coconut shells, palm kernel
        shells, sawdust, and more. Our mission is to deliver environmentally
        responsible solutions to meet the growing energy needs of local and
        international communities while promoting a greener planet.
      </p>
      <NavLink
        to="/about"
        className="px-6 py-2 text-sm font-bold text-white transition duration-300 bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 md:text-base"
      >
        Learn More
      </NavLink>
    </div>
  );
};

const Services = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen px-4 py-8 md:flex-row md:px-8 bg-gray-50">
  
      <div ref={textRef} className="flex justify-center w-full md:w-1/2">
        <TextSection />
      </div>

    
      <div ref={imageRef} className="flex justify-center w-full md:w-1/2">
        <ImageSection />
      </div>
    </div>
  );
};

export default Services;
