import { motion } from "framer-motion";
import { Users, MessageSquare, CheckCircle, Database, Monitor, Smartphone, Cloud } from "lucide-react";

export default function CollaborationVisual() {
  return (
    <div className="relative w-full aspect-[2/1] max-w-[800px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-pink-50/50 rounded-[100px] blur-3xl" />

      {/* Connecting Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 800 400">
        {/* Lines */}
        <path d="M400,200 L200,80" stroke="#fce7f3" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M400,200 L600,80" stroke="#fce7f3" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M400,200 L150,200" stroke="#fce7f3" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M400,200 L650,200" stroke="#fce7f3" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M400,200 L250,320" stroke="#fce7f3" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M400,200 L550,320" stroke="#fce7f3" strokeWidth="2" strokeDasharray="6 6" />

        {/* Animated Dots on Lines */}
        <motion.circle r="5" fill="#ec4899" animate={{ cx: [200, 400], cy: [80, 200], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        <motion.circle r="5" fill="#3b82f6" animate={{ cx: [600, 400], cy: [80, 200], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />
        <motion.circle r="5" fill="#10b981" animate={{ cx: [400, 150], cy: [200, 200], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 1 }} />
        <motion.circle r="5" fill="#8b5cf6" animate={{ cx: [400, 650], cy: [200, 200], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.3 }} />
        <motion.circle r="5" fill="#f59e0b" animate={{ cx: [250, 400], cy: [320, 200], opacity: [0, 1, 0] }} transition={{ duration: 2.7, repeat: Infinity, ease: "linear", delay: 0.8 }} />
        <motion.circle r="5" fill="#06b6d4" animate={{ cx: [550, 400], cy: [320, 200], opacity: [0, 1, 0] }} transition={{ duration: 1.9, repeat: Infinity, ease: "linear", delay: 1.2 }} />
      </svg>

      {/* Central Hub (Document/Project) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1], 
            boxShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 40px rgba(236,72,153,0.4)", "0px 0px 0px rgba(236,72,153,0)"] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center relative shadow-2xl"
        >
          <Database className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
        </motion.div>
      </div>

      {/* Nodes */}
      {/* Node 1: Top Left (25%, 20%) */}
      <div className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-pink-50 border-2 border-pink-200 flex items-center justify-center text-pink-500 shadow-lg will-change-transform transform-gpu">
          <Users className="w-5 h-5 sm:w-7 sm:h-7" />
        </motion.div>
      </div>

      {/* Node 2: Top Right (75%, 20%) */}
      <div className="absolute top-[20%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-500 shadow-lg will-change-transform transform-gpu">
          <MessageSquare className="w-5 h-5 sm:w-7 sm:h-7" />
        </motion.div>
      </div>

      {/* Node 3: Center Left (18.75%, 50%) */}
      <div className="absolute top-[50%] left-[18.75%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div animate={{ x: [-5, 5, -5] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-500 shadow-lg will-change-transform transform-gpu">
          <Monitor className="w-5 h-5 sm:w-7 sm:h-7" />
        </motion.div>
      </div>

      {/* Node 4: Center Right (81.25%, 50%) */}
      <div className="absolute top-[50%] left-[81.25%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div animate={{ x: [5, -5, 5] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-purple-500 shadow-lg will-change-transform transform-gpu">
          <Cloud className="w-5 h-5 sm:w-7 sm:h-7" />
        </motion.div>
      </div>

      {/* Node 5: Bottom Left (31.25%, 80%) */}
      <div className="absolute top-[80%] left-[31.25%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-500 shadow-lg will-change-transform transform-gpu">
          <CheckCircle className="w-5 h-5 sm:w-7 sm:h-7" />
        </motion.div>
      </div>

      {/* Node 6: Bottom Right (68.75%, 80%) */}
      <div className="absolute top-[80%] left-[68.75%] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-cyan-50 border-2 border-cyan-200 flex items-center justify-center text-cyan-500 shadow-lg will-change-transform transform-gpu">
          <Smartphone className="w-5 h-5 sm:w-7 sm:h-7" />
        </motion.div>
      </div>

    </div>
  );
}
