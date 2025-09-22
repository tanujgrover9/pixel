// src/components/Header.tsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiHome, FiShoppingBag, FiUsers, FiUser, FiMenu, FiX, FiLogIn } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const nav = [
  { label: "Home", to: "/", icon: <FiHome /> },
  { label: "Marketplace", to: "/marketplace", icon: <FiShoppingBag /> },
  { label: "Community", to: "/community", icon: <FiUsers /> },
  { label: "Creator", to: "/creator", icon: <FiUser /> },
];

export default function Header() {
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 px-4 py-3 backdrop-blur-lg bg-gradient-to-r from-gray-800/60 via-gray-900/70 to-gray-800/60 border-b border-white/10 shadow-lg">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-24 h-9 rounded-lg"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </Link>

        {/* Navigation (center, hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md bg-white/20 border border-white/20 shadow-sm">
          {nav.map((n) => {
            const isActive = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-gray-900 text-white shadow"
                      : "text-gray-200 hover:bg-gray-700/50"
                  }`}
              >
                {n.icon}
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Generate Button */}
          <Link
            to="/generate"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full  text-white shadow-lg 
                 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 
                 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] 
                 hover:scale-105 transition-all duration-300 overflow-hidden font-medium "
          >
            Generate 🟆
          </Link>

          {/* Login Icon Button */}
          <Link
            to="/login"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white shadow transition"
          >
            <FiLogIn size={20} />
          </Link>

          {/* Hamburger Menu (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 flex flex-col gap-3 px-4 py-4 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow"
          >
            {nav.map((n) => {
              const isActive = loc.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium transition
                    ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-200 hover:bg-gray-700/50"
                    }`}
                >
                  {n.icon}
                  {n.label}
                </Link>
              );
            })}

            {/* Generate + Login buttons in mobile menu */}
            <div className="flex flex-col gap-2 mt-2">
              <Link
                to="/generate"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center px-5 py-2 rounded-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium shadow transition"
              >
                Generate
              </Link>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white shadow transition"
              >
                <FiLogIn size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
