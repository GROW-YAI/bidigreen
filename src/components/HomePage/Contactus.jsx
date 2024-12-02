import { Mail, MapPinHouse, PhoneCall } from "lucide-react";
import womancall from "../../assets/images/womancall.jpg";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row py-16 items-center md:items-start gap-8 px-4 md:px-16">
        <img
          src={womancall}
          alt="Contact us"
          className="w-full md:w-1/2 rounded-md"
        />

        <div className="w-full md:w-1/2">
          <div className="px-4 md:px-14 py-4">
            <h1 className="font-bold text-2xl md:text-3xl py-2">
              Get in touch
            </h1>
            <p>Send us a message.</p>
          </div>

          <div className="px-4 md:px-14">
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="h-12 rounded px-5 outline-none border w-full"
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="h-28 rounded px-5 py-3 outline-none border w-full"
              ></textarea>
              <button
                type="submit"
                className="py-3 border rounded-lg bg-green-500 text-white w-36 px-4 self-start"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
    
        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <MapPinHouse />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Locate Us:</h2>
            <p className="text-sm md:text-base">
              PMB CT 126, Cantonments, <br /> Accra, Ghana
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 md:pb-0">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <PhoneCall />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Call Us:</h2>
            <p className="text-sm md:text-base">
              +233 302-651946
              <br />
              +233 302-681340
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center border h-16 w-16 rounded-full bg-green-500 text-white">
            <Mail />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Email:</h2>
            <p className="text-sm md:text-base">info@bidigreen.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
