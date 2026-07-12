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
              <p className="text-base font-bold text-pink-950 leading-tight">
                {label ?? filename}
              </p>
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
        <div className="fixed inset-0 z-[9999] bg-gray-50 flex flex-col animate-fade-in">
          
          {/* Top Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 shadow-sm shrink-0">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded flex items-center justify-center bg-pink-100 shrink-0">
                <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8.5 17H8v1H7v-4h1.5a1.5 1.5 0 0 1 0 3zm4.5-2.5a2 2 0 0 1-2 2h-.5v1.5H9.5v-4H11a2 2 0 0 1 2 .5v1zm4 .5h-1v1h1v1h-1v1h-1v-4h2v1z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base truncate">
                {label ?? filename}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-semibold transition-colors"
                title="Mở trong thẻ mới (Khuyên dùng cho điện thoại)"
              >
                <span className="hidden sm:inline">Mở toàn màn hình</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition-colors"
              >
                <span className="hidden sm:inline">Đóng</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="w-full flex-1 relative bg-gray-100 overflow-auto overflow-y-auto !WebkitOverflowScrolling-touch">
            <iframe
              src={`${filePath}#zoom=100`}
              className="w-full h-full border-0 absolute top-0 left-0"
              title={label ?? filename}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}