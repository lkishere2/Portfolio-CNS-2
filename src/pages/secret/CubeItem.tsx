
import type { LucideIcon } from "lucide-react";

interface CubeItemProps {
  icon: LucideIcon;
  color?: string;
  size?: number;
}

export default function CubeItem({ icon: Icon, color = "text-pink-500", size = 48 }: CubeItemProps) {
  const faceClasses = "absolute inset-0 flex items-center justify-center bg-white/90 border border-pink-200/50 shadow-sm";

  return (
    <div className="relative pointer-events-auto cursor-pointer group" style={{ width: size, height: size, perspective: '1000px' }}>
      <div
        className="w-full h-full relative group-hover:scale-125 transition-transform duration-300 animate-cube-spin"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className={faceClasses}
             style={{ transform: `translateZ(${size / 2}px)` }}>
          <Icon className={`w-1/2 h-1/2 ${color}`} />
        </div>
        {/* Back */}
        <div className={faceClasses}
             style={{ transform: `rotateY(180deg) translateZ(${size / 2}px)` }}>
          <Icon className={`w-1/2 h-1/2 ${color}`} />
        </div>
        {/* Right */}
        <div className={faceClasses}
             style={{ transform: `rotateY(90deg) translateZ(${size / 2}px)` }}>
          <Icon className={`w-1/2 h-1/2 ${color} opacity-50`} />
        </div>
        {/* Left */}
        <div className={faceClasses}
             style={{ transform: `rotateY(-90deg) translateZ(${size / 2}px)` }}>
          <Icon className={`w-1/2 h-1/2 ${color} opacity-50`} />
        </div>
        {/* Top */}
        <div className={faceClasses}
             style={{ transform: `rotateX(90deg) translateZ(${size / 2}px)` }}>
        </div>
        {/* Bottom */}
        <div className={faceClasses}
             style={{ transform: `rotateX(-90deg) translateZ(${size / 2}px)` }}>
        </div>
      </div>
    </div>
  );
}
