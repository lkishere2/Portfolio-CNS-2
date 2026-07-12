import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ObjectiveCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ObjectiveCard({ icon, title, description, className = "" }: ObjectiveCardProps) {
  return (
    <motion.div 
      whileHover={{ x: -5, boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 8px 10px -6px rgba(236, 72, 153, 0.1)" }}
      className={`bg-gradient-to-br from-white to-pink-50/50 border border-pink-100 rounded-3xl p-8 shadow-sm transition-all duration-300 relative z-10 flex flex-col justify-center h-full ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed pl-16">
        {description}
      </p>
    </motion.div>
  );
}
