"use client";
import Link from "next/link";
import { useState } from "react";

const navList = ["Home", "Services", "About", "Reviews", "Contact"];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white md:h-20 h-12 flex justify-between items-center border-t-4 border-[#FF3E41] pr-4 fixed top-0 left-0 z-50 w-screen">
      <div className="bg-[#FF3E41] h-full flex items-center justify-center text-white px-1 sm:px-10 uppercase font-semibold text-lg sm:text-xl">
        USA Dispatchers
      </div>

      <div className="flex items-center gap-6">
        {/* Hamburger menu for small screens */}
        <button
          className="text-[#FF3E41] text-3xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>

        {/* Links for larger screens */}
        <nav className="hidden md:flex justify-between items-center gap-4 lg:gap-8">
          {navList.map((list, index) => (
            <Link
              key={index}
              className="text-lg lg:text-xl hover:text-[#FF3E41] transition-all"
              href={`#${list}`}
            >
              {list}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-lg lg:text-xl font-medium">Sign Up</button>
          <a
            href="tel:+15852078508"
            className="text-[#FF3E41] font-medium text-lg lg:text-xl"
          >
            +1 (585) 207-8508
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-10 left-0 w-full bg-white z-10 p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navList.map((list, index) => (
              <Link
                key={index}
                className="text-lg hover:text-[#FF3E41] transition-all"
                href={`#${list}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {list}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col mt-4 gap-4">
            <button className="text-lg font-medium">Sign Up</button>
            <a
              href="tel:+15852078508"
              className="text-[#FF3E41] font-medium text-lg"
            >
              +1 (585) 207-8508
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
