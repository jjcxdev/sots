"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="flex py-2 md:px-10 px-4 lg:px-24 items-center bg-white justify-between flex-wrap md:flex-nowrap">
      <div className="flex items-center flex-shrink-0 text-white w-[80px] h-auto">
        <Link href="/">
          <Image
            src="/sotsLogo.webp"
            width="80"
            height="80"
            alt="Seminar On The Seas Logo"
            style={{ width: "auto" }}
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <Link href="mailto:info@seminarontheseas.com" className="md:hidden ">
          <button
            type="button"
            className="text-white justify-end mr-4 md:mr-8 bg-custom-gold hover:bg-custom-blue hover:text-white font-bold text-sm px-4 py-2 text-center uppercase whitespace-nowrap">
            Book Now
          </button>
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex items-center px-3 py-2 rounded text-accent-blue hover:text-black-400">
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
      </div>
      <div
        className={`w-full flex flex-col text-custom-blue-dark md:pr-6 flex-grow ${
          isOpen ? "block" : "hidden"
        } md:flex md:justify-end`}
        role="menu">
        <div className="text-base uppercase font-extrabold mt-4 md:mt-0 flex flex-col md:flex-row md:items-center justify-end">
          <div onClick={closeNavbar} role="none">
            <Link
              href="/"
              className="block py-2 md:px-4 text-white-200 hover:underline hover:text-custom-gold"
              role="menuitem">
              Home
            </Link>
          </div>
          <div onClick={closeNavbar} role="none">
            <Link
              href="/course"
              className="block py-2 md:px-4 text-white-200 hover:underline hover:text-custom-gold"
              role="menuitem">
              Course
            </Link>
          </div>
          <div onClick={closeNavbar} role="none">
            <Link
              href="/rooms"
              className="block py-2 md:px-4 text-white-200 hover:underline hover:text-custom-gold"
              role="menuitem">
              Rooms / Pricing
            </Link>
          </div>
          <div onClick={closeNavbar} role="none">
            <Link
              href="/faq"
              className="block py-2 md:px-4 text-white-200 hover:underline hover:text-custom-gold"
              role="menuitem">
              FAQ
            </Link>
          </div>
          <div
            className="flex flex-col items-center justify-center md:hidden"
            role="none">
            <div>U.S. & CANADA</div>
            <div className="bg-custom-blue-dark w-full text-white py-2 flex items-center justify-center tel:416.896.2495">
              <FaPhone className="mr-2" />
              <a href="tel:416.896.2495" role="menuitem">
                416.896.2495
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Link href="mailto:info@seminarontheseas.com" className="hidden md:block">
        <button
          type="button"
          className="text-white justify-end ml-8 bg-custom-gold hover:bg-custom-blue hover:text-white font-bold text-sm px-4 py-2 text-center uppercase  whitespace-nowrap">
          Book Now
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
