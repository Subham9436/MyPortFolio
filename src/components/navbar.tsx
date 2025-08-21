import { useState } from "react";
import { navLinks } from "../constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-4 bg-[url(/images/bg.png)]">
      <div className="flex items-center justify-between bg-gray-700/35 rounded-lg px-6 py-4">
        {/* Logo */}
        <div className="font-semibold text-xl sm:text-2xl">
          <a href="#hero">Subham Kumar</a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row space-x-6">
          {navLinks.map((link) => (
            <li key={link.link}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a href="#form" className="hidden sm:block">
          <button
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
            style={{ cursor: "pointer" }}
          >
            Contact Me
          </button>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setOpen(!open)}
          style={{cursor:"pointer"}}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 bg-gray-800/80 rounded-lg p-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <a
              key={link.link}
              href={link.link}
              className="block text-white hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
          <a href="#form">
            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold mt-2" style={{cursor:"pointer"}}>
              Contact Me
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
