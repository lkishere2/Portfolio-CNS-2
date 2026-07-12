import { motion } from "framer-motion";
import { BrainCircuit, Image, Type, Palette } from "lucide-react";

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

      {/* Orbit Rings */}
      <div className="absolute w-52 h-52 border-2 border-pink-100 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
      <div className="absolute w-72 h-72 border border-pink-50 rounded-full" />

      {/* Floating Tool Icons */}
      {/* Text AI */}
      <motion.div 
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 shadow-sm z-30 backdrop-blur-sm"
      >
        <Type className="w-6 h-6" />
      </motion.div>

      {/* Image AI */}
      <motion.div 
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-2 w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-sm z-30 backdrop-blur-sm"
      >
        <Image className="w-6 h-6" />
      </motion.div>

      {/* Design AI */}
      <motion.div 
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 left-2 w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-500 shadow-sm z-30 backdrop-blur-sm"
      >
        <Palette className="w-6 h-6" />
      </motion.div>
      
    </div>
  );
}
