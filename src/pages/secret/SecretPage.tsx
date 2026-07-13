import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search, MessageSquare, Handshake, ShieldCheck, Mountain, Rocket, BookOpen, FileCode2 } from "lucide-react";

import SphericalNetwork from "./SphericalNetwork";
import InvisibleOrbit from "./InvisibleOrbit";
import CubeItem from "./CubeItem";

export default function SecretPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access if screen is laptop size (>= 1024px)
    if (window.innerWidth < 1024) {
      navigate("/summary", { replace: true });
    }
    
    // Add resize listener to kick them out if they resize smaller
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        navigate("/summary", { replace: true });
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-50 via-white to-white">
      {/* 3D Network Background */}
      <SphericalNetwork />

      {/* Orbits Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center" style={{ perspective: '1200px' }}>
        {/* Inner Orbit: 2 items */}
        <InvisibleOrbit radius={250} duration={20} tiltX={65} tiltY={20}>
          <CubeItem icon={Search} color="text-red-500" />
          <CubeItem icon={MessageSquare} color="text-green-500" />
        </InvisibleOrbit>
        
        {/* Middle Orbit: 3 items */}
        <InvisibleOrbit radius={400} duration={25} reverse tiltX={70} tiltY={-30}>
          <CubeItem icon={Handshake} color="text-blue-500" />
          <CubeItem icon={ShieldCheck} color="text-yellow-500" />
          <CubeItem icon={Mountain} color="text-pink-500" />
        </InvisibleOrbit>

        {/* Outer Orbit: 3 items */}
        <InvisibleOrbit radius={550} duration={35} tiltX={75} tiltY={15}>
          <CubeItem icon={Rocket} color="text-purple-500" />
          <CubeItem icon={BookOpen} color="text-orange-500" />
          <CubeItem icon={FileCode2} color="text-teal-500" />
        </InvisibleOrbit>
      </div>

      {/* Back button top-left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-50 p-3 rounded-full flex items-center gap-2 font-medium transition-all duration-300 bg-white/80 text-pink-600 hover:bg-white hover:text-pink-700 backdrop-blur-md shadow-sm"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
