import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/#about" },
  { label: "Projects", path: "/#projects" },
  { label: "Conclusion", path: "/#conclusion" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isStrictHome = isHome && location.hash === "";
  const hasPlayedIntro = sessionStorage.getItem("introPlayed") === "true";
  const shouldAnimate = isStrictHome && !hasPlayedIntro;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: shouldAnimate ? "-100%" : 0 }}
      animate={{ y: 0 }}
      transition={{ delay: shouldAnimate ? 2.5 : 0, duration: 0.8, ease: "easeOut" }}
      className={`${isHome ? "fixed w-full" : "sticky"} top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 backdrop-blur-xl border-b border-pink-100 shadow-sm py-2" 
          : "bg-white/50 backdrop-blur-md border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
            <img 
              src="/avatar.jpg" 
              alt="Avatar" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white relative z-10 shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                e.currentTarget.nextElementSibling?.classList.add('flex');
              }}
            />
            {/* Fallback avatar */}
            <div className="hidden w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 items-center justify-center border-2 border-white relative z-10 shadow-sm">
              <span className="text-white text-sm font-bold">M</span>
            </div>
          </div>
          <span className="font-bold text-gray-800 text-lg tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 transition-all duration-300">
            Phạm Thị Mai
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = link.path === location.pathname + location.hash;
            return (
              <a
                key={link.path}
                href={link.path}
                className="relative px-4 py-2 text-sm font-semibold transition-colors group"
              >
                <span className={`relative z-10 ${active ? "text-pink-700" : "text-gray-500 group-hover:text-pink-600"}`}>
                  {link.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-pink-100/80 rounded-full -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!active && (
                  <div className="absolute inset-0 bg-pink-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200 ease-out -z-0"></div>
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5 relative">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-pink-50 shadow-xl absolute w-full top-full"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = link.path === location.pathname + location.hash;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center ${
                      active
                        ? "bg-pink-100 text-pink-700 shadow-sm"
                        : "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}