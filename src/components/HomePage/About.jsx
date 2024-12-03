import greenP from "../../assets/images/greenP.jpg";
import about from "../../assets/images/about.webp";
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
        <div className="absolute  inset-0 flex flex-col items-center justify-center text-center px-4 ">
          {/* <li >About Us</li> */}
          <h2 className="text-4xl font-extrabold text-white py-5">
            Welcome to Bidigreen Ghana Limited
          </h2>
          <p className="text-white font-bold text-xl">
            Pioneering The Sustainable Cooking Fuel for a Better Future
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center md:flex-row py-10 px-6 md:px-16 gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 top-36">
          <h1 className="text-2xl font-bold mb-4 underline text-green-500">
            About Us
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
            At Bidigreen Ghana Limited, we are transforming the way charcoal is
            produced and consumed. As a forward-thinking company rooted in
            sustainability and innovation, we specialize in producing
            high-quality charcoal from agro-waste materials such as coconut
            shells, palm kernel shells, sawdust, and more. Our mission is to
            deliver environmentally responsible solutions to meet the growing
            energy needs of local and international communities while promoting
            a greener planet.
          </p>
          <div>
            <h2 className="font-bold">Why Choose Bidigreen?</h2>
            <li>Burns Longer: Lasts 3 to 4 times longer than wood charcoal.</li>
            <li>
              Smokeless: No harmful smoke, making it cleaner for you and the
              environment.
            </li>
            <li>
              High Heat: Produces more heat for faster and more efficient
              cooking.
            </li>
            <li>
              Cost-Effective: Saves money by reducing the need for frequent
              charcoal purchases.
            </li>
            <li>
              Eco-Friendly: Made from agro-waste, it helps protect forests and
              reduce waste, supporting environmental sustainability.
            </li>

            <div>
              <h2 className="font-bold py-2">
                How is Bidigreen Helping Communities?
              </h2>
              <p>Bidigreen isn’t just fuel; it’s a solution.</p>
              <li>
                Cleaner Environment: It tackles sanitation issues by repurposing
                waste.
              </li>
              <li>
                Protects Forests: Reduces the need to cut down trees for
                charcoal.
              </li>
              <li>
                Sustainable Livelihoods: Provides an alternative income source
                for wood charcoal producers and distributors.
              </li>
            </div>

            <div>
              <h2 className="font-bold text-green-500">
                What Sets Bidigreen Ghana Limited Apart
              </h2>
              <ol class="list-decimal pl-6">
                <div>
                  <li className="font-bold">Sustainability at the Core</li>
                  <p>
                    We are committed to reducing environmental impact by
                    repurposing agro-waste materials. By utilizing resources
                    that would otherwise be discarded, we contribute to a
                    circular economy while conserving forests and reducing
                    carbon emissions.
                  </p>
                </div>

                <div>
                  <li className="font-bold">Premium Quality Charcoal</li>
                  <p>
                    Our charcoal products are designed to meet the diverse needs
                    of our customers. Whether you are a local household seeking
                    reliable fuel or a large-scale international enterprise, we
                    guarantee exceptional quality, efficiency, and
                    eco-friendliness in every briquette.
                  </p>
                </div>

                <div>
                  <li className="font-bold">Community-Focused Approach </li>
                  <p>
                    At Bidigreen Ghana Limited, we prioritize the well-being of
                    our local community. From sourcing raw materials from local
                    suppliers to creating jobs and empowering rural economies,
                    we ensure that our operations positively impact the people
                    around us.
                  </p>
                </div>

                <div>
                  <li className="font-bold">Global Reach with a Local Touch</li>
                  <p>
                    Serving both domestic and international markets, our
                    products bridge the gap between tradition and innovation.
                    Whether you’re in Ghana or across the globe, Bidigreen Ghana
                    Limited is your trusted partner for sustainable charcoal
                    solutions.
                  </p>
                </div>
              </ol>
            </div>

            <div>
              <h1 className="text-lg text-green-500 underline">Our Vision</h1>
              <p>
                To be the global leader in sustainable charcoal production,
                delivering eco-friendly energy solutions that reduce waste,
                support local communities, and contribute to a healthier
                environment.
              </p>
            </div>

            <div>
              <h1 className="text-lg text-green-500 underline">Our Mission</h1>
              <li>
                Transform agro-waste into high-quality, sustainable charcoal.
              </li>
              <li>
                Foster environmental stewardship through innovative production
                practices.
              </li>
              <li>
                Serve as a trusted partner to charcoal users locally and
                internationally.
              </li>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={about}
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
