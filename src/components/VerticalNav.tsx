import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Search, CheckSquare, Presentation, Lightbulb, FileText, Bookmark, Menu, X, GripHorizontal } from "lucide-react";

export default function VerticalNav() {
  const location = useLocation();
  const constraintsRef = useRef(null);
  const isDragging = useRef(false);

  // Persistent state for open/close
  const [isOpen, setIsOpen] = useState(() => {
    return sessionStorage.getItem("verticalNavOpen") === "true";
  });

  useEffect(() => {
    sessionStorage.setItem("verticalNavOpen", String(isOpen));
  }, [isOpen]);

  // Persistent state for position
  const [position, setPosition] = useState(() => {
    const saved = sessionStorage.getItem("verticalNavPos");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return { x: 16, y: typeof window !== "undefined" ? window.innerHeight / 2 - 200 : 200 };
  });

  if (location.pathname === "/") return null;

  const navItems = [
    { path: "/week1", label: "Week 1", tooltip: "Quản lý tệp & HĐH", icon: <Folder className="w-5 h-5" /> },
    { path: "/week2", label: "Week 2", tooltip: "Tìm kiếm học thuật", icon: <Search className="w-5 h-5" /> },
    { path: "/week3", label: "Week 3", tooltip: "Viết Prompt hiệu quả", icon: <CheckSquare className="w-5 h-5" /> },
    { path: "/week4", label: "Week 4", tooltip: "Nghiên cứu & Phân tích", icon: <Presentation className="w-5 h-5" /> },
    { path: "/week5", label: "Week 5", tooltip: "Ứng dụng AI", icon: <Lightbulb className="w-5 h-5" /> },
    { path: "/week6", label: "Week 6", tooltip: "Đồ án & Tương lai", icon: <FileText className="w-5 h-5" /> },
    { path: "/summary", label: "Summary", tooltip: "Tổng kết khóa học", icon: <Bookmark className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Invisible container for drag constraints so it doesn't leave the screen */}
      <div className="fixed inset-4 pointer-events-none z-[100]" ref={constraintsRef} />

      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => { isDragging.current = true; }}
        onDragEnd={(_event, info) => {
          setTimeout(() => { isDragging.current = false; }, 150);
          // Save new position
          const newPos = { x: position.x + info.offset.x, y: position.y + info.offset.y };
          setPosition(newPos);
          sessionStorage.setItem("verticalNavPos", JSON.stringify(newPos));
        }}
        className="fixed z-[101] pointer-events-auto flex flex-col items-center gap-3"
        initial={position}
      >
        {/* Main Toggle Button */}
        <button
          onClick={(e) => {
            if (isDragging.current) {
              e.preventDefault();
              return;
            }
            setIsOpen(!isOpen);
          }}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all focus:outline-none cursor-grab active:cursor-grabbing border-2 border-white/20 hover:scale-105 ${
            isOpen ? "bg-gray-800 text-white" : "bg-gradient-to-tr from-pink-600 to-rose-400 text-white"
          }`}
          title="Kéo thả để di chuyển"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[70px] flex flex-col gap-2 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-2xl border border-pink-100"
            >
              {/* Drag Handle Indicator */}
              <div className="w-full flex justify-center py-1 opacity-40 cursor-grab active:cursor-grabbing">
                <GripHorizontal className="w-4 h-4" />
              </div>

              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-pink-500 text-white shadow-md shadow-pink-200"
                          : "bg-transparent text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                      }`}
                    >
                      {item.icon}
                    </Link>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                      <span className="font-bold text-pink-300 mr-2">{item.label}</span>
                      {item.tooltip}
                      {/* Triangle Arrow */}
                      <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-[5px] border-transparent border-r-gray-800"></div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
