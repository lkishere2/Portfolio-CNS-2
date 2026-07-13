import { motion } from "framer-motion";
import { BrainCircuit, Image, Type, Palette, Target } from "lucide-react";

export default function AIVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-pink-50/50 rounded-full blur-3xl hidden md:block" />

      {/* Center Brain */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
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
        {/* Target (Top) */}
        <motion.div 
          className="absolute z-10"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "0%", left: "50%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-500 shadow-sm will-change-transform transform-gpu"
          >
            <Target className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Text AI (Right) */}
        <motion.div 
          className="absolute z-10"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "50%", left: "100%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.5 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 shadow-sm will-change-transform transform-gpu"
          >
            <Type className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Image AI (Bottom) */}
        <motion.div 
          className="absolute z-10"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "100%", left: "50%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.7 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-sm will-change-transform transform-gpu"
          >
            <Image className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Design AI (Left) */}
        <motion.div 
          className="absolute z-10"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "50%", left: "0%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.9 }}
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-500 shadow-sm will-change-transform transform-gpu"
          >
            <Palette className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}
