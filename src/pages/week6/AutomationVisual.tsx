import { motion } from "framer-motion";
import { Settings, Zap, Mail, FileText, MessageSquare } from "lucide-react";

export default function AutomationVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="hidden md:block absolute inset-0 bg-amber-50/50 rounded-full blur-3xl" />

      {/* Main Central Gear */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 flex items-center justify-center z-20 relative shadow-2xl border-4 border-white/50"
      >
        <Settings className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
      </motion.div>

      {/* Interlocking Small Gear */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[15%] w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center z-10 shadow-xl border-2 border-white/50"
      >
        <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </motion.div>

      {/* Nodes around the gears */}
      {/* Mail Node */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[20%] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-lg z-30"
      >
        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
      </motion.div>

      {/* Sheet Node */}
      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[20%] left-[10%] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-lg z-30"
      >
        <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
      </motion.div>

      {/* Slack Node */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[20%] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-lg z-30"
      >
        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
      </motion.div>

      {/* Zap connecting particles */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[30%] w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center z-20"
      >
        <Zap className="w-4 h-4 text-amber-500" fill="currentColor" />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[30%] left-[35%] w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center z-20"
      >
        <Zap className="w-4 h-4 text-amber-500" fill="currentColor" />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[25%] right-[30%] w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center z-20"
      >
        <Zap className="w-4 h-4 text-amber-500" fill="currentColor" />
      </motion.div>

    </div>
  );
}
