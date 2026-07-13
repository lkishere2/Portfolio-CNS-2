import { Shield, Fingerprint, Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ResponsibleAIVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-emerald-50/50 rounded-full blur-3xl hidden md:block" />

      {/* Orbit Rings */}
      <div className="absolute inset-0 border-2 border-emerald-100 rounded-full opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute inset-4 border border-emerald-50 rounded-full" />
      <div className="absolute inset-10 border border-emerald-50/50 rounded-full border-dashed" />

      {/* Central Shield */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1], 
            boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 30px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center relative shadow-xl"
        >
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
        </motion.div>
      </div>

      {/* Orbiting Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-10"
      >
        <motion.div 
          className="absolute"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "0%", left: "50%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
        >
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-2xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-500 shadow-sm"
          >
            <Fingerprint className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 z-10"
      >
        <motion.div 
          className="absolute"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "50%", left: "100%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-sm border border-teal-100"
          >
            <Lock className="w-5 h-5" />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute"
          style={{ x: "-50%", y: "-50%" }}
          initial={{ top: "50%", left: "50%", opacity: 0, scale: 0.5 }}
          whileInView={{ top: "85%", left: "15%", opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.3 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100"
          >
            <ShieldCheck className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
}
