import FileViewer from "../components/FileViewer";
import GoalItem from "../components/GoalItem";
import ContentShowcase from "./week5/ContentShowcase";
import AIVisual from "./week5/AIVisual";
import PageNav from "../components/PageNav";

export default function Week5() {
  const goals = [
    "Ứng dụng kết hợp 3 loại AI tạo sinh (Văn bản, Hình ảnh, Thiết kế) vào 1 dự án.",
    "Ghi chép và phân tích quá trình sử dụng AI (Prompt, Kết quả, Chỉnh sửa).",
    "Hoàn thiện sản phẩm sáng tạo có sự kết hợp hài hòa giữa AI và đóng góp cá nhân.",
    "Đánh giá ưu/nhược điểm và vai trò của AI trong quy trình sáng tạo."
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-12">
      {/* Page Header */}
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 5 · Nhiệm vụ 5
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Sáng tạo nội dung{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                đa phương tiện
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Ứng dụng các công cụ Generative AI (Tạo sinh) để thiết kế slide, vẽ hình ảnh và làm video một cách đột phá và tiết kiệm thời gian.
            </p>
          </div>
          <PageNav prev={{ path: "/week4", label: "Week 4" }} next={{ path: "/week6", label: "Week 6" }} />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Column: Visual Component */}
        <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-8 z-10 h-fit">
          <AIVisual />
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 relative z-0">
          
          {/* File Viewer (Báo cáo minh chứng) */}
          <div className="opacity-0 animate-slide-in-right transform origin-left will-change-transform transform-gpu" style={{ animationDelay: '0.1s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <h2 className="text-sm font-bold text-pink-700 uppercase tracking-widest px-1">
                Báo cáo nộp bài
              </h2>
            </div>
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week5.pdf"
                label="Báo cáo tuần 5 - Quy trình sáng tạo nội dung với AI"
              />
            </div>
          </div>

          {/* Goal Items */}
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-2 mb-2 opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.2s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
              Mục tiêu cốt lõi
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {goals.map((goal, idx) => (
                <GoalItem key={idx} text={goal} delay={`${0.3 + idx * 0.15}s`} />
              ))}
            </div>
          </div>

          {/* Content Showcase */}
          <div className="opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.4s', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <ContentShowcase />
          </div>

        </div>
      </div>
    </main>
  );
}
