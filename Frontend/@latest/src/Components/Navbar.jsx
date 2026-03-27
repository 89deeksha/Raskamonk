import React from "react";
import image from "../assets/image.png";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  const menuItems = [
    "Home",
    "Services",
    "Experts",
    "Mood Tracker",
    "Assessment",
    "Resources",
    "About",
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center px-6 md:px-16 py-3">

        {/* Logo */}
        <img className="h-10 w-auto" src={image} alt="Logo" />

        {/* Menu */}
        <ul className="hidden md:flex gap-3 ml-10 font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={
                index === 0
                  ? "bg-purple-600 text-white px-3 py-2 text-sm rounded-md"
                  : "bg-gray-100 text-gray-500 px-3 py-2 text-sm rounded-md hover:bg-gray-200"
              }
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 ml-auto">

          {/* Search */}
          <div className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <CiSearch size={20} className="text-gray-500" />
          </div>

          {/* Buttons */}
          <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-200">
            Sign in
          </button>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;