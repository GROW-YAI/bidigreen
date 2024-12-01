import TeamMembers from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import { Autoplay } from "swiper/modules"; // Import Autoplay module

const Team = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-3xl font-bold ">OUR TEAM</h1>
        <h3 className="text-lg text-green-500">Our Production Team</h3>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // Time in milliseconds between automatic transitions
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        spaceBetween={10} // Space between slides
        slidesPerView={3} // Display three slides at a time
        loop={true} // Enable infinite looping
        className="w-full"
      >
        {TeamMembers.map((team, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-96 mx-auto group">
              <img src={team.image} alt="team image" className="w-full" />
              <div
                className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 p-2 text-center 
                           transition-colors duration-300 ease-in-out group-hover:bg-green-500"
              >
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-white">
                  {team.name}
                </h2>
                <p className="text-sm text-green-500 font-medium group-hover:text-white">
                  {team.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
