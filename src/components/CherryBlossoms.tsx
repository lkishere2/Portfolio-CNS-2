import { useEffect, useState } from "react";

export default function CherryBlossoms() {
  const [petals, setPetals] = useState<
    { id: number; direction: "left" | "right"; left: string; delay: string; fallDuration: string; swayDuration: string; opacity: number; scale: number }[]
  >([]);

  useEffect(() => {
    // Generate petals with random positions, delays, and speeds
    const newPetals = Array.from({ length: 40 }).map((_, i) => {
      // 50% fall right (45 deg), 50% fall left (60 deg)
      const direction: "left" | "right" = i % 2 === 0 ? "right" : "left";
      
      let startLeft = "";
      if (direction === "right") {
        // Falling +100vw, so start far left
        startLeft = `${Math.random() * 100 - 50}%`;
      } else {
        // Falling -70vw, so start far right
        startLeft = `${Math.random() * 100 + 50}%`;
      }

      return {
        id: i,
        direction,
        left: startLeft,
        delay: `-${Math.random() * 15}s`, // Random negative delay to start mid-air
        fallDuration: `${Math.random() * 8 + 8}s`, // 8-16s to fall (slower, more realistic)
        swayDuration: `${Math.random() * 2 + 2.5}s`, // 2.5-4.5s for a full sway
        opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
        scale: Math.random() * 0.5 + 0.6, // 0.6 to 1.1
      };
    });
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className={`absolute top-[-10%] will-change-transform transform-gpu ${
            petal.direction === "right" ? "animate-falling-right" : "animate-falling-left"
          }`}
          style={{
            left: petal.left,
            animationDuration: petal.fallDuration,
            animationDelay: petal.delay,
            opacity: petal.opacity,
          }}
        >
          {/* Swaying wrapper */}
          <div 
            className="animate-sway will-change-transform"
            style={{ 
              animationDuration: petal.swayDuration,
              animationDelay: petal.delay 
            }}
          >
            {/* The Petal Shape */}
            <div 
              className="w-3 h-4 bg-gradient-to-br from-pink-200 to-pink-300 rounded-[100%_0_100%_0] shadow-[0_0_8px_rgba(255,192,203,0.6)]"
              style={{ transform: `scale(${petal.scale}) rotate(15deg)` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
