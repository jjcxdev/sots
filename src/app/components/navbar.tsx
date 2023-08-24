"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  return (
    <div className="flex py-2 px-6 items-center bg-white justify-between flex-wrap md:flex-nowrap">
      <div className="flex items-center mr-14 flex-shrink-0 text-white">
        <Link href="/">
          <Image
            src="/logo.png"
            width="72"
            height="72"
            className=""
            alt="Seminar On The Seas Logo"
          />
        </Link>
      </div>
      <button
        type="button"
        className="text-black justify-end ml-8 bg-custom-gold hover:bg-custom-blue hover:text-white font-bold rounded-lg text-sm px-4 py-2 text-center uppercase sm:hidden md:hidden whitespace-nowrap">
        Book Now
      </button>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black hover:text-black-400">
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex flex-col bg-white md:pr-6 text-custom-blue flex-grow ${
          isOpen ? "block" : "hidden" // Handles the toggle state for small screens
        } md:flex`}>
        <div className="text-base uppercase font-extrabold flex flex-col md:flex-row md:items-center justify-end">
          <div onClick={closeNavbar}>
            <Link href="/" className="block py-2 md:px-4 text-white-200">
              Home
            </Link>
          </div>
          <div onClick={closeNavbar}>
            <Link href="/course" className="block py-2 md:px-4 text-white-200">
              Experience
            </Link>
          </div>
          <div onClick={closeNavbar}>
            <Link href="/rooms" className="block py-2 md:px-4 text-white-200">
              Rooms / Pricing
            </Link>
          </div>
          <div onClick={closeNavbar}>
            <Link href="/faq" className="block py-2 md:px-4 text-white-200">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center md:hidden">
            <div>U.S. & CANADA</div>
            <div className="bg-custom-blue w-full text-white py-2 flex justify-center">
              <FaPhone className="mr-2" />
              <a href="tel:416.896.2495">416.896.2495</a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <button
        type="button"
        className="text-black bg-custom-gold hover:bg-custom-blue hover:text-white font-bold rounded-lg text-sm px-4 py-2 text-center uppercase hidden md:block whitespace-nowrap">
        Book Now
      </button>
    </div>
  );
}
export default Navbar;
