import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import ContactModal from "./ContactModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogoDark, setIsLogoDark] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 7600 && scrollPosition <= 13700) {
        setIsLogoDark(true);
      } else {
        setIsLogoDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-2 z-[1000] w-[180px] p-2 bg-transparent text-[#f9f4e8] font-sans">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={toggleMenu}
          className={`font-bold cursor-pointer text-[28px] ${
            isLogoDark ? "text-[#1f1f1f]" : "text-[#f9f4e8]"
          }`}
        >
          ApexBart
        </h1>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className={`ml-2 text-lg cursor-pointer focus:outline-none ${
            isLogoDark ? "text-[#1f1f1f]" : "text-[#f9f4e8]"
          }`}
        >
          {menuOpen ? "▲" : "▼"}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute border border-[#1f1f1f] top-full left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        } bg-[#f9f4e8] text-[#1f1f1f] shadow-lg rounded-lg w-[400px] p-5`}
      >
        <ul className="list-none m-0 p-0">
          {[
            {
              path: "about",
              text: "ApexBart uslubi",
            },
            {
              path: "hamkor",
              text: "Hamkorlar",
            },
            {
              path: "workers",
              text: "Xodimlar",
            },
            {
              path: "vocansiya",
              text: "Ishlar",
            },
            {
              path: "support",
              text: "Ai qullab-quvvatlash",
            },
          ].map((item, index) => (
            <ScrollLink
              onClick={() => setMenuOpen(false)}
              to={item.path}
              smooth={true}
              duration={500}
              key={index}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              offset={-70}
              className={`flex justify-between items-center py-2 border-b ${
                index !== 4 ? "border-gray-300" : "border-none"
              } cursor-pointer animate-fadeIn`}
            >
              {item.text}
              <span className="text-sm">▼</span>
            </ScrollLink>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
