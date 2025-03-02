import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LOGO from '../images/LOgo.png';
import { Button } from "@mantine/core";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLink = [
    { name: "Home", path: "/" },
    { name: "Product List", path: "/productList" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={` w-full transition-all duration-300 ease-in justify-between px-10 py-2 z-10 fixed flex items-center ${isScrolled ? "bg-white shadow-md" : "bg-transparent text-white"}`}>
      {/* Logo */}
      <div>
        <img src={LOGO} alt="" className="w-20 bg-white h-20" />
      </div>

      {/* Hamburger Menu Icon (Visible only on phones) */}
      <div className="md:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className={`focus:outline-none transition-all duration-300 ease-in ${isScrolled ? "text-red-500 hover:text-red-700" : "text-white hover:text-red-500"}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links (Visible on desktop) */}
      <div className="hidden md:flex md:items-center">
        {navLink.map((elem, index) => (
          <Link
            key={index}
            to={elem.path}
            className={`font-semibold transition-all duration-300 ease-in hover:text-red-500 text-[1.2rem] ml-5 ${isScrolled ? "text-gray-800" : "text-white"}`}
          >
            {elem.name}
          </Link>

        ))}
      </div>

      {/* Full-Page Overlay and Navigation Links (Visible only on phones) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50"
          onClick={toggleMenu}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {navLink.map((elem, index) => (
              <Link
                key={index}
                to={elem.path}
                className={`font-semibold transition-all duration-300 ease-in hover:text-red-500 text-[2rem] my-2 ${isScrolled ? "text-red-500" : "text-white"}`}
                onClick={toggleMenu}
              >
                {elem.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Book A Test Drive Button (Visible on desktop) */}
      <div className="hidden md:block">
        <Button className="bg-red-500 py-3 px-4 rounded-lg text-white hover:text-white hover:bg-black font-semibold transition-all duration-500 ease-in">
          Book A Test Drive
        </Button>
      </div>
    </div>
  );
};

export default Navbar;