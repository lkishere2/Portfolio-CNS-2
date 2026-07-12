import { useState, useEffect } from "react";
import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Laptop() {
  const fullText = "Làm sao để viết Prompt hiệu quả?";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 800 / fullText.length; // Types in ~0.8s
    
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTypingDone(true);
        }
      }, typingSpeed);
      
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="w-full max-w-[500px] mx-auto perspective-[1200px]">
      <div 
        className="transform-gpu transition-all duration-700 ease-out"
      >
        {/* Laptop Screen / Lid */}
        <div className="relative bg-gray-200 p-2 sm:p-3 rounded-t-2xl border-b-2 border-gray-300 shadow-2xl">
          {/* Webcam */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full border border-gray-600"></div>
          
          {/* Screen Display */}
          <div className="bg-white w-full aspect-[16/10] rounded-lg overflow-hidden flex flex-col border border-gray-200">
            
            {/* Header */}
            <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-3 justify-between">
              <span className="text-gray-500 text-xs font-semibold">AI Assistant</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto font-sans">
              
              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="bg-pink-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm">
                  <span className="font-medium tracking-wide">
                    {displayedText}
                    {!isTypingDone && <span className="animate-pulse inline-block w-1.5 h-3.5 bg-white ml-1 align-middle"></span>}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1 border border-gray-200">
                  <User className="w-3.5 h-3.5 text-gray-500" />
                </div>
              </div>

              {/* AI Response */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isTypingDone ? 1 : 0, y: isTypingDone ? 0 : 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="bg-gray-50 text-gray-700 px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-gray-100 shadow-sm flex-1">
                  <p className="mb-2 font-medium">Để viết Prompt hiệu quả, bạn cần kết hợp các yếu tố:</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2"><span className="text-pink-500">❖</span> Role (Vai trò)</div>
                    <div className="flex items-center gap-2"><span className="text-pink-500">❖</span> Context (Bối cảnh)</div>
                    <div className="flex items-center gap-2"><span className="text-pink-500">❖</span> Format (Định dạng)</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Laptop Base (Keyboard area) */}
        <div className="relative h-4 sm:h-5 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-xl shadow-2xl flex justify-center border-x border-b border-gray-300">
          {/* Trackpad notch */}
          <div className="w-16 sm:w-20 h-1.5 bg-gray-300 rounded-b-md absolute top-0"></div>
        </div>
        <div className="h-1.5 sm:h-2 bg-gray-400 rounded-b-full w-[95%] mx-auto opacity-30 blur-[2px] mt-1"></div>
      </div>
    </div>
  );
}
