import { useState, useEffect } from 'react';

export default function SearchBar() {
  const fullText = "Week 2 - Tìm kiếm thông tin và đánh giá học thuật";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 25); // 25ms per character * 50 chars ~= 1.25 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`w-full max-w-3xl mx-auto flex flex-col items-center justify-center transition-transform duration-700 ease-out ${isTypingDone ? 'translate-y-0' : 'translate-y-[15vh]'}`}>
      
      {/* Search Input Container */}
      <div className="relative w-full group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative bg-white border-2 border-pink-100 rounded-full shadow-lg flex items-center px-4 sm:px-6 py-3 sm:py-4 lg:py-5 overflow-hidden">
          
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <div className="ml-2 sm:ml-4 flex-1 overflow-hidden relative flex items-center h-6 sm:h-7">
            {/* Typing text container */}
            <div className="text-gray-800 font-medium text-xs sm:text-base md:text-lg lg:text-xl border-r-2 border-pink-500 pr-1 animate-pulse whitespace-nowrap">
              {displayedText}
            </div>
          </div>

          <div className="flex gap-1.5 sm:gap-2 ml-2 sm:ml-4 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shadow-inner text-sm sm:text-base">
              G
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shadow-inner">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Search Pills */}
      <div className={`flex flex-wrap gap-2 justify-center mt-6 transition-all duration-700 delay-300 ${isTypingDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {['"Translation strategies"', 'AND', 'Neural Machine Translation', 'NOT', 'filetype:pdf', 'site:edu'].map((tag, idx) => (
          <span 
            key={idx} 
            className={`px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-mono rounded-full border ${
              ['AND', 'OR', 'NOT'].includes(tag) 
                ? 'bg-rose-100 text-rose-600 border-rose-200 font-bold'
                : 'bg-white text-gray-600 border-gray-200 hover:border-pink-300 hover:text-pink-600 cursor-pointer transition-colors shadow-sm'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}