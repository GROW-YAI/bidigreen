import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { NavLink } from 'react-router-dom';
import img2 from '../../assets/images/img2.jpg';
import SDG7 from "../../assets/images/SDG7.png";
import SDG8 from "../../assets/images/SDG8.png";
import SDG13 from "../../assets/images/SDG13.png";
import SDG15 from "../../assets/images/SDG15.png";


gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  return (
    <div className="w-full h-auto max-w-md p-4">
      <img
        src={img2}
        alt="Farmers"
        className="object-cover w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 text-center md:p-8">
      <h1 className="mb-4 text-2xl font-bold text-green-700 md:text-4xl">
        A Dedicated Team
      </h1>
      <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-lg">
      Bidigreen Ghana Limited was founded by three visionary co-founders, each bringing unique expertise and passion. Together, they are deeply committed to sustainable development and actively align their efforts with its goals.
      </p>

      <div className='flex gap-8'>
        <img src={SDG7} alt="" width="15%" />
        <img src={SDG8} alt="" width="15%" />
        <img src={SDG13} alt="" width="15%" />
        <img src={SDG15} alt="" width="15%" />
      </div>
      {/* <NavLink
        to=""
        className="px-6 py-2 text-sm font-bold text-white transition duration-300 bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 md:text-base"
      >
        Meet Team
      </NavLink> */}
    </div>
  );
};

const AboutTeam = () => {
  const imageWrapperRef = useRef(null);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    // GSAP animation for image section
    gsap.fromTo(
      imageWrapperRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // GSAP animation for text section
    gsap.fromTo(
      textWrapperRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textWrapperRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div
      id="AboutTeam"
      className="flex flex-col items-center justify-center w-full h-auto px-4 py-8 md:flex-row md:h-screen md:px-8"
    >
      {/* Image Section */}
      <div
        ref={imageWrapperRef}
        className="flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0"
      >
        <ImageSection />
      </div>

      {/* Text Section */}
      <div
        ref={textWrapperRef}
        className="flex items-center justify-center w-full md:w-1/2"
      >
        <TextSection />
      </div>
    </div>
  );
};

export default AboutTeam;
