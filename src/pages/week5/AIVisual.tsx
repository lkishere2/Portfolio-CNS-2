import { motion } from "framer-motion";
import { BrainCircuit, Image, Type, Palette, Target } from "lucide-react";

export default function AIVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-pink-50/50 rounded-full blur-3xl" />

      {/* Center Brain */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1], 
          boxShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 40px rgba(236,72,153,0.4)", "0px 0px 0px rgba(236,72,153,0)"] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center z-20 relative shadow-lg"
      >
        <BrainCircuit className="w-14 h-14 text-white" />
      </motion.div>

      {/* Orbit Rings Background */}
      <div className="absolute w-72 h-72 border border-pink-50 rounded-full z-0" />

      {/* Orbiting Container */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-52 h-52 border-2 border-pink-100 rounded-full border-dashed z-10 will-change-transform transform-gpu"
      >
        {/* Target (Top) - Appears at 0s */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shadow-sm backdrop-blur-sm will-change-transform transform-gpu"
          >
            <Target className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Text AI (Right) - Appears at 1s */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute top-1/2 -translate-y-1/2 -right-7"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 shadow-sm backdrop-blur-sm will-change-transform transform-gpu"
          >
            <Type className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Image AI (Bottom) - Appears at 1s */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -bottom-7 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-sm backdrop-blur-sm will-change-transform transform-gpu"
          >
            <Image className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Design AI (Left) - Appears at 1s */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute top-1/2 -translate-y-1/2 -left-7"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-500 shadow-sm backdrop-blur-sm will-change-transform transform-gpu"
          >
            <Palette className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}
