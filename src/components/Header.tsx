import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/#about" },
  { label: "Projects", path: "/#projects" },
  { label: "Conclusion", path: "/#conclusion" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isStrictHome = isHome && location.hash === "";
  const hasPlayedIntro = sessionStorage.getItem("introPlayed") === "true";
  const shouldAnimate = isStrictHome && !hasPlayedIntro;

  return (
    <motion.header 
      initial={{ y: shouldAnimate ? "-100%" : 0 }}
      animate={{ y: 0 }}
      transition={{ delay: shouldAnimate ? 2.5 : 0, duration: 0.8, ease: "easeOut" }}
      className={`${isHome ? "fixed w-full" : "sticky"} top-0 z-50 bg-pink-50/90 backdrop-blur-md border-b border-pink-100 shadow-sm`}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between">

        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow">
            <span className="text-white text-sm font-bold">M</span>
          </div>
          <span className="font-semibold text-pink-700 text-lg tracking-tight group-hover:text-rose-500 transition-colors">
            Phạm Thị Mai
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            // Very simple active check; you can refine this later if you implement actual scrolling
            const active = location.pathname === link.path && location.hash === "";
            return (
              <a
                key={link.path}
                href={link.path}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-pink-100 text-pink-700"
                    : "text-gray-500 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-pink-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-pink-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-pink-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-pink-100 bg-white/95 px-6 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path && location.hash === "";
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-pink-100 text-pink-700"
                    : "text-gray-500 hover:text-pink-600 hover:bg-pink-50"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </motion.header>
  );
}