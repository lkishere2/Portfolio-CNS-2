import React from "react";

interface InvisibleOrbitProps {
  radius: number; // in pixels
  duration: number; // in seconds
  reverse?: boolean;
  tiltX?: number;
  tiltY?: number;
  children: React.ReactNode[];
}

export default function InvisibleOrbit({ radius, duration, reverse = false, tiltX = 0, tiltY = 0, children }: InvisibleOrbitProps) {
  const count = children.length;
  
  return (
    <div 
      className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
      style={{ 
        width: radius * 2, 
        height: radius * 2,
        transform: `translate(-50%, -50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transformStyle: 'preserve-3d',
        '--orbit-duration': `${duration}s`
      } as React.CSSProperties}
    >
      <div
        className={`w-full h-full relative ${reverse ? 'animate-orbit-spin-reverse' : 'animate-orbit-spin'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {React.Children.map(children, (child, index) => {
          const angle = (index / count) * 360;
          return (
            <div 
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Counter-rotate the child so it stays upright relative to the orbit */}
              <div
                className={reverse ? 'animate-orbit-spin' : 'animate-orbit-spin-reverse'}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Counter-tilt the 3D plane so the cubes stand straight to the screen */}
                <div style={{ transform: `rotateY(${-tiltY}deg) rotateX(${-tiltX}deg)`, transformStyle: 'preserve-3d' }}>
                  {child}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
