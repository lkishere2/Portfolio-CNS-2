import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const lastRipplePos = useRef({ x: -100, y: -100 });
  const rippleCount = useRef(0);
  
  // Smooth spring animation for the trailing ring
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkModal = () => {
      const hasIframe = !!document.querySelector("iframe");
      setIsModalOpen(hasIframe);
    };

    checkModal();

    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Do not show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px (w-8) circle
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
      
      // Ripple logic: throttle by distance (e.g. 60px) to stay lightweight
      const dx = e.clientX - lastRipplePos.current.x;
      const dy = e.clientY - lastRipplePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 60) {
        lastRipplePos.current = { x: e.clientX, y: e.clientY };
        const newRipple = {
          id: rippleCount.current++,
          x: e.clientX,
          y: e.clientY
        };
        
        // Keep max 15 ripples in state to prevent bloat
        setRipples(prev => [...prev.slice(-14), newRipple]);
        
        // Auto remove ripple from state after animation completes
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 800);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible || isModalOpen) return null;

  return (
    <>
      {/* Water Ripples */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-6 h-6 rounded-full border border-pink-300 pointer-events-none z-[9999]"
            style={{
              left: ripple.x - 12, // center the 24px circle
              top: ripple.y - 12
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-pink-500 pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(244, 114, 182, 0.15)" : "rgba(244, 114, 182, 0)",
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
