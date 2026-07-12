import { motion } from "framer-motion";
import { ShieldCheck, Bug, Fingerprint, Lock } from "lucide-react";

export default function SecurityVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="hidden md:block absolute inset-0 bg-emerald-50/50 rounded-full blur-3xl" />

      {/* Main Shield */}
      <div className="relative z-20">
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-2xl relative overflow-hidden"
        >
          {/* Radar Sweep Effect inside shield */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 origin-center bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-[200%] -top-1/2"
            style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}
          />
          <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-white relative z-10" />
        </motion.div>
        
        {/* Radar Rings expanding outward */}
        <motion.div 
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-3xl border-2 border-emerald-400 z-10"
        />
        <motion.div 
          animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 rounded-3xl border-2 border-teal-300 z-10"
        />
      </div>

      {/* Attacking Bugs/Malware being repelled */}
      <motion.div 
        animate={{ 
          x: [100, 40, 100], 
          y: [-100, -40, -100],
          opacity: [0, 1, 0],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/2 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 z-30"
      >
        <Bug className="w-6 h-6" />
      </motion.div>

      <motion.div 
        animate={{ 
          x: [-100, -40, -100], 
          y: [80, 30, 80],
          opacity: [0, 1, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-500 z-30"
      >
        <Bug className="w-6 h-6" />
      </motion.div>

      {/* Floating Security Icons */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-[10%] left-[15%] w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-emerald-100 flex items-center justify-center shadow-lg z-30"
      >
        <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
      </motion.div>

      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-[10%] right-[15%] w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-teal-100 flex items-center justify-center shadow-lg z-30"
      >
        <Fingerprint className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
      </motion.div>

    </div>
  );
}
