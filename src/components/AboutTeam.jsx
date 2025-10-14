import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img2 from '../assets/images/img2.jpg';
import SDG7 from "../assets/images/SDG7.png";
import SDG8 from "../assets/images/SDG8.png";
import SDG13 from "../assets/images/SDG13.png";
import SDG15 from "../assets/images/SDG15.png";


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
   <div id="AboutTeam" className="w-full overflow-x-hidden bg-gray-50">
  <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-auto px-4 py-8 md:flex-row md:h-screen md:px-8 box-border">
    {/* Image Section */}
    <div
      ref={imageWrapperRef}
      className="flex items-center justify-center w-full md:flex-1 md:max-w-1/2 mb-6 md:mb-0 min-w-0 box-border overflow-hidden"
      aria-hidden="false"
    >
      {/* extra wrapper protects against inside elements growing */}
      <div className="w-full max-w-full">
        <ImageSection />
      </div>
    </div>

    {/* Text Section */}
    <div
      ref={textWrapperRef}
      className="flex items-center justify-center w-full md:flex-1 md:max-w-1/2 min-w-0 box-border"
    >
      <div className="w-full break-words">
        <TextSection />
      </div>
    </div>
  </div>
</div>

  );
};

export default AboutTeam;
