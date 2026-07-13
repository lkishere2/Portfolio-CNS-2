import { useRef, useEffect } from 'react';

const NUM_PARTICLES = 120;
const SPHERE_RADIUS = 300; // pixels
const CONNECTION_DISTANCE = 110; // maximum distance to draw line

interface Particle {
  x: number;
  y: number;
  z: number;
  originalX: number;
  originalY: number;
  originalZ: number;
  vx: number;
  vy: number;
  vz: number;
}

export default function SphericalNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate particles using Fibonacci sphere
    const particles: Particle[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const y = 1 - (i / (NUM_PARTICLES - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;

      // Scale by SPHERE_RADIUS
      particles.push({
        x: x * SPHERE_RADIUS,
        y: y * SPHERE_RADIUS,
        z: z * SPHERE_RADIUS,
        originalX: x * SPHERE_RADIUS,
        originalY: y * SPHERE_RADIUS,
        originalZ: z * SPHERE_RADIUS,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
      });
    }

    let animationFrameId: number;
    let angleX = 0;
    let angleY = 0;
    
    // Mouse interaction
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMouseX;
        const deltaY = e.clientY - previousMouseY;
        
        targetAngleY -= deltaX * 0.005; // Negative for natural drag feel
        targetAngleX += deltaY * 0.005;
        
        previousMouseX = e.clientX;
        previousMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if(e.touches.length > 0) {
        isDragging = true;
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - previousMouseX;
        const deltaY = e.touches[0].clientY - previousMouseY;
        
        targetAngleY -= deltaX * 0.005;
        targetAngleX += deltaY * 0.005;
        
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleMouseUp);

    const draw = () => {
      // Clear canvas with a subtle trail effect
      ctx.clearRect(0, 0, width, height);

      // Smoothly update rotation angles based on target
      angleX += (targetAngleX - angleX) * 0.1;
      angleY += (targetAngleY - angleY) * 0.1;
      
      // Auto rotation
      targetAngleY += 0.002;
      targetAngleX += 0.001;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projectedParticles: { x: number; y: number; z: number; scale: number; p: Particle }[] = [];

      // Rotate and project particles
      for (const p of particles) {
        // Subtle floating movement
        p.originalX += p.vx;
        p.originalY += p.vy;
        p.originalZ += p.vz;

        // Bounding roughly to sphere
        const dist = Math.sqrt(p.originalX*p.originalX + p.originalY*p.originalY + p.originalZ*p.originalZ);
        if (Math.abs(dist - SPHERE_RADIUS) > 30) {
           p.vx *= -1;
           p.vy *= -1;
           p.vz *= -1;
        }

        // Rotate around X
        const y1 = p.originalY * cosX - p.originalZ * sinX;
        const z1 = p.originalZ * cosX + p.originalY * sinX;

        // Rotate around Y
        const x2 = p.originalX * cosY + z1 * sinY;
        const z2 = z1 * cosY - p.originalX * sinY;
        
        const y2 = y1;

        // Simple 3D projection (perspective)
        const perspective = 1000;
        const scale = perspective / (perspective + z2);

        const projX = width / 2 + x2 * scale;
        const projY = height / 2 + y2 * scale;

        projectedParticles.push({
          x: projX,
          y: projY,
          z: z2,
          scale: scale,
          p: p
        });
      }

      // Sort by Z for drawing back-to-front
      projectedParticles.sort((a, b) => b.z - a.z);

      // Draw lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedParticles.length; i++) {
        const p1 = projectedParticles[i];
        const alpha = Math.max(0.1, Math.min(1, (SPHERE_RADIUS - p1.z) / (SPHERE_RADIUS * 2)));
        
        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = `rgba(236, 72, 153, ${alpha})`;
        ctx.arc(p1.x, p1.y, 2 * p1.scale, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p2 = projectedParticles[j];
          // Use original 3D coordinates to calculate distance to avoid perspective distortion
          const dx = p1.p.originalX - p2.p.originalX;
          const dy = p1.p.originalY - p2.p.originalY;
          const dz = p1.p.originalZ - p2.p.originalZ;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < CONNECTION_DISTANCE) {
             const opacity = (1 - distance / CONNECTION_DISTANCE) * alpha * 0.6;
             ctx.beginPath();
             ctx.moveTo(p1.x, p1.y);
             ctx.lineTo(p2.x, p2.y);
             ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;
             ctx.lineWidth = 1;
             ctx.stroke();
          }
        }
      }

      // Draw the core glowing sphere
      ctx.beginPath();
      const coreScale = 1000 / 1000; // Center scale
      ctx.arc(width/2, height/2, 40 * coreScale, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 80 * coreScale);
      gradient.addColorStop(0, 'rgba(236, 72, 153, 0.4)');
      gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.1)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />;
}
