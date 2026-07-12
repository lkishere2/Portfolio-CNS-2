import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface FileViewerProps {
  filename: string;
  label?: string;
}

export default function FileViewer({ filename, label }: FileViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const filePath = `/data/${filename}`;
  const isWeek1 = filename.includes("week1");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleOpen = () => {
    if (isWeek1) {
      alert("Tài liệu tuần 1 hiện chưa có trong dữ liệu.");
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div className="bg-white border border-pink-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-pink-300 transition-all group">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 bg-pink-50/50 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 17H8v1H7v-4h1.5a1.5 1.5 0 0 1 0 3zm4.5-2.5a2 2 0 0 1-2 2h-.5v1.5H9.5v-4H11a2 2 0 0 1 2 .5v1zm4 .5h-1v1h1v1h-1v1h-1v-4h2v1z"/>
              </svg>
            </div>
            <div>
              <p className="text-base font-bold text-pink-950 leading-tight mb-1">
                {label ?? filename}
              </p>
              <p className="text-sm text-pink-600/70 font-medium">{filename}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleOpen}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-bold bg-white border border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 shadow-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Xem File
            </button>
          </div>
        </div>
      </div>

      {/* Very Simple In-Page Modal */}
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black animate-fade-in flex flex-col"
          onClick={() => setIsOpen(false)}
        >
          {/* Simple Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full z-20 shadow-lg transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Container spanning 100% with no padding/margin */}
          <div 
            className="w-full h-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={filePath}
              className="w-full h-full border-0"
              title={label ?? filename}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}