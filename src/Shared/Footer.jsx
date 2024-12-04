import React from "react";
import { Link } from "react-router-dom";
import insta from "../assets/images/insta.jpg";
import link from "../assets/images/link.png";
import tiktok from "../assets/images/tiktok.webp";

const Footer = ({ bgcolor }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full px-6 py-8 bg-gray-800 text-white`}
      style={{ backgroundColor: bgcolor }}
    >
      <div className="flex flex-col gap-10 md:flex-row md:justify-evenly">
        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Contact Us</h4>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:bidigreenghanalimited@gmail.com"
              className="text-green-400 hover:underline"
            >
              bidigreenghanalimited@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <br />
            <a
              href="tel:+233553396566"
              className="text-green-400 hover:underline"
            >
              +233 553-396566
            </a>
            <br />
            <a
              href="tel:+233506075866"
              className="text-green-400 hover:underline"
            >
              +233 506-075866
            </a>
            <br />
            <a
              href="tel:+233541655694"
              className="text-green-400 hover:underline"
            >
              +233 541-655694
            </a>
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="text-green-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="text-green-400 hover:underline"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-green-400 hover:underline">
                Help
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-green-400 hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xl font-semibold text-white">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bidigreen_ghana/profilecard/?igsh=MXY3c2d1b2Rnczhn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-10 h-10 rounded-lg"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/bidigreen-ghana-limited/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link} alt="LinkedIn" className="w-10 h-10 rounded-lg" />
            </a>
            <a
              href="https://www.tiktok.com/@bidigreen_ghana?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" className="w-10 h-10 rounded-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 text-center border-t border-gray-700">
        <p className="text-sm">
          &copy; {currentYear} BidiGreen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
