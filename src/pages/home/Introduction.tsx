import { motion, type Variants } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Introduction() {
  const location = useLocation();
  const isStrictHome = location.pathname === "/" && location.hash === "";
  
  // If we're not on strict home (e.g. have a hash like #about), or already played, skip intro
  const hasPlayedIntro = sessionStorage.getItem("introPlayed") === "true" || !isStrictHome;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: hasPlayedIntro ? 0.2 : 1.2, // Wait for curtain to open only if not played
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    if (!hasPlayedIntro) {
      // Mark as played immediately so reloads don't replay it if interrupted
      sessionStorage.setItem("introPlayed", "true");
      
      // Lock scrolling on mount
      document.body.style.overflow = "hidden";
      
      // Unlock after animations finish
      const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 2500);

      return () => {
        document.body.style.overflow = "unset";
        clearTimeout(timer);
      };
    }
  }, [hasPlayedIntro]);

  return (
    <section className="relative overflow-hidden py-24 px-6 min-h-screen flex flex-col justify-center bg-gradient-to-b from-pink-50/80 to-pink-100/50">
      
      {/* 🎭 CURTAIN EFFECT - ONLY SHOW IF NOT PLAYED */}
      {!hasPlayedIntro && (
        <>
          {/* Left Curtain */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-pink-100 z-50 origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />
          {/* Right Curtain */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-pink-100 z-50 origin-right"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />
        </>
      )}

      {/* Background blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" 
      />

      <motion.div 
        className="relative max-w-4xl mx-auto z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar / Image Reveal */}
          <motion.div 
            className="shrink-0"
            variants={{
              hidden: { scale: 0, rotate: -180, opacity: 0 },
              visible: { scale: 1, rotate: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15, delay: hasPlayedIntro ? 0.2 : 1.2 } }
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Outer rotating ring */}
              <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-pink-300 animate-[spin_10s_linear_infinite] group-hover:border-pink-500 transition-colors" />
              
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white relative z-10 flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400">
                <img 
                  src="/avatar.jpg" 
                  alt="Phạm Thị Mai" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Fallback overlay */}
                <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              Xin chào, em là{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 animate-pulse">
                  Phạm Thị Mai
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-3 bg-pink-200/60 -z-0 -rotate-2"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: hasPlayedIntro ? 0.8 : 2 }}
                />
              </span>{" "}
              <motion.span 
                className="inline-block"
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              >
                👋
              </motion.span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Em là sinh viên năm nhất khoa <span className="font-semibold text-pink-600">Ngôn ngữ và văn hóa Anh</span> ở trường Đại học Ngoại ngữ - ĐHQGHN.
            </motion.p>


          </div>
        </div>

      </motion.div>
    </section>
  );
}