import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LightbulbCircuit() {
  const navigate = useNavigate();

  const handleBulbClick = () => {
    // Navigate only if screen is large enough (laptop)
    if (window.innerWidth >= 1024) {
      navigate("/secret");
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center scale-75 lg:scale-90">
      {/* Background glow */}
      <div className="absolute inset-0 bg-pink-100 rounded-full blur-xl opacity-70 w-32 h-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pointer-events-none" />
      
      {/* Circuit lines */}
      <svg className="absolute w-40 h-40 pointer-events-none" viewBox="0 0 160 160">
        <path d="M80 20 L80 50 M80 110 L80 140 M20 80 L50 80 M110 80 L140 80" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M40 40 L60 60 M120 120 L100 100 M120 40 L100 60 M40 120 L60 100" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="20" cy="80" r="3" fill="#ec4899" />
        <circle cx="140" cy="80" r="3" fill="#ec4899" />
        <circle cx="80" cy="20" r="3" fill="#ec4899" />
        <circle cx="80" cy="140" r="3" fill="#ec4899" />
        <circle cx="40" cy="40" r="3" fill="#ec4899" />
        <circle cx="120" cy="120" r="3" fill="#ec4899" />
        <circle cx="120" cy="40" r="3" fill="#ec4899" />
        <circle cx="40" cy="120" r="3" fill="#ec4899" />
      </svg>

      {/* Center Bulb Container */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(236,72,153,0.6)" }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          onClick={handleBulbClick}
          className="bg-white rounded-full p-4 border-2 border-pink-200 shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center justify-center cursor-pointer pointer-events-auto"
        >
          <Lightbulb className="w-8 h-8 text-pink-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
