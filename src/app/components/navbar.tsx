"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="flex py-2 md:px-10 px-4 lg:px-24 items-center bg-white justify-between flex-nowrap">
      <div className="flex items-center flex-shrink-0 text-white w-[80px] h-auto">
        <Link href="/">
          <Image
            src="/sotsLogo.webp"
            width="80"
            height="80"
            className=""
            alt="Seminar On The Seas Logo"
            style={{ width: "auto" }}
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <button
          type="button"
          className="text-neutral-900 justify-end mr-4 sm:mr-8 bg-custom-gold hover:bg-custom-blue hover:text-white font-bold rounded-lg text-sm px-4 py-2 text-center uppercase md:hidden whitespace-nowrap">
          Book Now
        </button>
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
        className={`w-full flex flex-col text-custom-blue-dark md:pr-6flex-grow ${
          isOpen ? "block" : "hidden" // Handles the toggle state for small screens
        } md:flex`}
        role="menu">
        <div className="text-base uppercase font-extrabold flex flex-col md:flex-row md:items-center justify-end">
          <div onClick={closeNavbar} role="none">
            {" "}
            {/* role="none" to remove menuitem semantics */}
            <Link
              href="/"
              className="block py-2 md:px-4 text-white-200"
              role="menuitem">
              Home
            </Link>
          </div>
          <div onClick={closeNavbar} role="none">
            <Link
              href="/course"
              className="block py-2 md:px-4 text-white-200"
              role="menuitem">
              Courses
            </Link>
          </div>
          <div onClick={closeNavbar} role="none">
            <Link
              href="/rooms"
              className="block py-2 md:px-4 text-white-200"
              role="menuitem">
              Rooms / Pricing
            </Link>
          </div>
          <div onClick={closeNavbar} role="none">
            <Link
              href="/faq"
              className="block py-2 md:px-4 text-white-200"
              role="menuitem">
              FAQ
            </Link>
          </div>
          <div
            className="flex flex-col items-center justify-center md:hidden"
            role="none">
            <div>U.S. & CANADA</div>
            <div className="bg-custom-blue-dark w-full text-white py-2 flex justify-center tel:416.896.2495">
              <FaPhone className="mr-2 flex align-middle" />
              <a href="" role="menuitem">
                416.896.2495
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <button
        type="button"
        className="text-neutral-900 justify-end ml-8 bg-custom-gold hover:bg-custom-blue hover:text-white font-bold rounded-lg text-sm px-4 py-2 text-center uppercase hidden md:block whitespace-nowrap">
        Book Now
      </button>
    </nav>
  );
}
export default Navbar;
