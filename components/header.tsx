"use client";
import headerData from "@/data/header.json";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    console.log("click");
    setShowMenu((prev) => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center px-6 w-full">
        <div className="flex justify-between w-full items-center py-4 border-b border-white/20">
          <Link href="/" className="font-bebas text-white text-xl hover:text-gray-300 transition-colors duration-300">
            arch Interio Studio
          </Link>

          <ul
            className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black/95 backdrop-blur-md w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center ${
              showMenu ? "top-0" : "-top-[100vh]"
            }`}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index} className="text-white text-base uppercase hover:text-gray-300 transition-colors duration-300">
                  <Link href={item.href} onClick={() => setShowMenu(false)}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleMenu()}
              className="text-white sm:hidden z-20 relative hover:text-gray-300 transition-colors duration-300"
            >
              {showMenu ? "Close" : "Menu"}
            </button>
            <Link href="/contact">
              <button className="sm:block font-bebas hidden border-2 border-white rounded-full px-4 py-2 text-white hover:bg-white hover:text-black duration-300 transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
