import { motion } from "framer-motion";
import { BarChart3, TrendingUp, PieChart } from "lucide-react";

export default function DataVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      
      {/* Background Glow */}
      <div className="hidden md:block absolute inset-0 bg-blue-50/50 rounded-full blur-3xl" />

      {/* Main Dashboard Panel */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-3/4 bg-white/90 backdrop-blur-sm rounded-3xl border border-blue-100 shadow-2xl p-6 flex flex-col gap-4 relative z-20"
      >
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-gray-700 text-sm">Data Analytics</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
        </div>

        <div className="flex-1 flex items-end gap-2 sm:gap-3 justify-center pb-2">
          {/* Animated Bars */}
          {[40, 70, 45, 90, 60, 85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: "10%" }}
              animate={{ height: [`${height * 0.5}%`, `${height}%`, `${height * 0.7}%`, `${height}%`] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 sm:w-8 rounded-t-md bg-gradient-to-t from-blue-400 to-cyan-400"
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-lg border border-purple-100 flex items-center justify-center z-30"
      >
        <PieChart className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
      </motion.div>

      <motion.div 
        animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 w-20 h-14 sm:w-24 sm:h-16 bg-white rounded-xl shadow-lg border border-emerald-100 flex items-center justify-center gap-1 sm:gap-2 z-30"
      >
        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
        <span className="font-bold text-emerald-600 text-sm sm:text-base">+24%</span>
      </motion.div>

    </div>
  );
}
