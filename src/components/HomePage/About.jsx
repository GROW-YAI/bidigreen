import greenP from "../../assets/images/greenP.jpg";
import bidi from "../../assets/images/bidi.jpg";
import bidipac from "../../assets/images/bidipac.jpg";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: `url(${greenP})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-extrabold text-white py-5">
            Welcome to Bidigreen Ghana Limited
          </h2>
          <p className="text-white font-bold text-lg">
            Pioneering The Sustainable Cooking Fuel for a Better Future
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row py-10 px-6 md:px-16 gap-8">
        <div className="md:w-1/2 top-36">
          <h1 className="text-xl font-bold mb-4 underline text-green-500">
            About Us
          </h1>
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            At Bidigreen Ghana Limited, we are transforming the way charcoal is
            produced and consumed. As a forward-thinking company rooted in
            sustainability and innovation, we specialize in producing
            high-quality charcoal from agro-waste materials such as coconut
            shells, palm kernel shells, sawdust, and more. Our mission is to
            deliver environmentally responsible solutions to meet the growing
            energy needs of local and international communities while promoting
            a greener planet.
          </p>
          <div className="text-base">
            <h2 className="font-bold">Why Choose Bidigreen?</h2>
            <ul className="list-disc pl-5">
              <li className="text-base leading-relaxed text-gray-700">
                Burns Longer: Lasts 3 to 4 times longer than wood charcoal.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                Smokeless: No harmful smoke, making it cleaner for you and the
                environment.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                High Heat: Produces more heat for faster and more efficient
                cooking.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                Cost-Effective: Saves money by reducing the need for frequent
                charcoal purchases.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                Eco-Friendly: Made from agro-waste, it helps protect forests and
                reduce waste, supporting environmental sustainability.
              </li>
            </ul>
            <h2 className="font-bold py-2">
              How is Bidigreen Helping Communities?
            </h2>
            <ul className="list-disc pl-5">
              <li className="text-base leading-relaxed text-gray-700">
                Cleaner Environment: It tackles sanitation issues by repurposing
                waste.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                Protects Forests: Reduces the need to cut down trees for
                charcoal.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                Sustainable Livelihoods: Provides an alternative income source
                for wood charcoal producers and distributors.
              </li>
            </ul>
          </div>

          <div className="text-base">
            <h2 className="font-bold text-green-500">
              What Sets Bidigreen Ghana Limited Apart
            </h2>
            <ol className="list-decimal pl-6">
              <li className="font-bold">Sustainability at the Core</li>
              <p className="text-base leading-relaxed text-gray-700">
                We are committed to reducing environmental impact by repurposing
                agro-waste materials. By utilizing resources that would
                otherwise be discarded, we contribute to a circular economy
                while conserving forests and reducing carbon emissions.
              </p>
              <li className="font-bold">Premium Quality Charcoal</li>
              <p className="text-base leading-relaxed text-gray-700">
                Our charcoal products are designed to meet the diverse needs of
                our customers. Whether you are a local household seeking
                reliable fuel or a large-scale international enterprise, we
                guarantee exceptional quality, efficiency, and eco-friendliness
                in every briquette.
              </p>
              <li className="font-bold">Community-Focused Approach</li>
              <p className="text-base leading-relaxed text-gray-700">
                At Bidigreen Ghana Limited, we prioritize the well-being of our
                local community. From sourcing raw materials from local
                suppliers to creating jobs and empowering rural economies, we
                ensure that our operations positively impact the people around
                us.
              </p>
              <li className="font-bold">Global Reach with a Local Touch</li>
              <p className="text-base leading-relaxed text-gray-700">
                Serving both domestic and international markets, our products
                bridge the gap between tradition and innovation. Whether you’re
                in Ghana or across the globe, Bidigreen Ghana Limited is your
                trusted partner for sustainable charcoal solutions.
              </p>
            </ol>
          </div>

          <div className="text-base">
            <h1 className="text-lg text-green-500 underline">Our Vision</h1>
            <p className="text-base leading-relaxed text-gray-700">
              To be the global leader in sustainable charcoal production,
              delivering eco-friendly energy solutions that reduce waste,
              support local communities, and contribute to a healthier
              environment.
            </p>
            <h1 className="text-lg text-green-500 underline">Our Mission</h1>
            <ul className="list-disc pl-5">
              <li className="text-base leading-relaxed text-gray-700">
                Transform agro-waste into high-quality, sustainable charcoal.
              </li>
              <li className=" text-base leading-relaxed text-gray-700">
                Foster environmental stewardship through innovative production
                practices.
              </li>
              <li className="text-base leading-relaxed text-gray-700">
                Serve as a trusted partner to charcoal users locally and
                internationally.
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-10">
          <img
            src={bidipac}
            alt="About Us"
            className="w-full max-w-sm md:max-w-full rounded-md"
          />

          <img
            src={bidi}
            alt="About Us"
            className="w-full max-w-sm md:max-w-full rounded-md"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
