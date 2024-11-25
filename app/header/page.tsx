"use client";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">ProPhone</div>

      {/* Desktop */}
      <nav className="hidden md:flex text-gray-700 space-x-8">
        <button
          onClick={() => handleScroll("home")}
          className="hover:text-blue-500"
        >
          Inicio
        </button>
        <button
          onClick={() => handleScroll("features")}
          className="hover:text-blue-500"
        >
          Características
        </button>
        <button
          onClick={() => handleScroll("reviews")}
          className="hover:text-blue-500"
        >
          Reseñas
        </button>
      </nav>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-gray-700 hover:text-blue-500"
        >
          {isMenuOpen ? (
            <FaXmark className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`absolute top-full text-xl left-0 w-full bg-white shadow-md transform transition-all duration-300 ease-in-out md:hidden h-screen ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        <nav className="flex flex-col text-gray-700 space-y-8 p-4 pt-8">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-blue-500"
          >
            Inicio
          </button>
          <button
            onClick={() => handleScroll("features")}
            className="hover:text-blue-500"
          >
            Características
          </button>
          <button
            onClick={() => handleScroll("reviews")}
            className="hover:text-blue-500"
          >
            Reseñas
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
