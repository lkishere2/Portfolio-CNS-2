import Laptop from "./week3/Laptop";
import PromptKnowledge from "./week3/PromptKnowledge";
import PromptCompareLab from "./week3/PromptCompareLab";
import GoalItem from "../components/GoalItem";
import FileViewer from "../components/FileViewer";
import PageNav from "../components/PageNav";

export default function Week3() {
  const goals = [
    "Tìm hiểu và phân loại các kỹ thuật Prompt Engineering cơ bản đến nâng cao.",
    "Áp dụng framework CREATE và công thức RTF vào các bài toán học thuật (IELTS, khái niệm, tóm tắt).",
    "Thử nghiệm và phân tích sự khác biệt về chất lượng đầu ra giữa các cấp độ câu lệnh.",
    "Rút ra nguyên tắc kiểm soát ảo giác (Hallucination) và tối ưu hóa suy luận của AI."
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-12">
      
      {/* Page Header */}
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 3 · Nhiệm vụ 3
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Viết Prompt{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                hiệu quả
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Khám phá sức mạnh của các câu lệnh (prompts). Học cách thiết kế bối cảnh, vai trò và giới hạn để khai thác tối đa tiềm năng của Trí tuệ Nhân tạo.
            </p>
          </div>
          <PageNav prev={{ path: "/week2", label: "Week 2" }} next={{ path: "/week4", label: "Week 4" }} />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 relative z-0 order-2 lg:order-1">
          
          {/* File Viewer (Báo cáo minh chứng) */}
          <div className="opacity-0 animate-slide-in-right transform origin-left will-change-transform transform-gpu" style={{ animationDelay: '0.2s', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <h2 className="text-sm font-bold text-red-700 uppercase tracking-widest px-1">
                Báo cáo nộp bài
              </h2>
            </div>
            {/* Wrapper to scale it up slightly to make it bigger and more prominent */}
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week3.pdf"
                label="Báo cáo tuần 3 - Viết Prompt hiệu quả"
              />
            </div>
          </div>

          {/* Mục tiêu cốt lõi */}
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold text-red-700 uppercase tracking-wide border-b border-red-100 pb-2 mb-2 opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.4s', animationDuration: '1s', animationFillMode: 'forwards' }}>
              Mục tiêu cốt lõi
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {goals.map((goal, idx) => (
                <GoalItem key={idx} text={goal} delay={`${0.6 + idx * 0.15}s`} />
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Graphic */}
        <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-8 z-10 h-fit order-1 lg:order-2">
          <div className="transform-gpu scale-[0.85] sm:scale-100 origin-top transition-transform duration-500">
            <Laptop />
          </div>
        </div>

      </div>

      {/* Full-width Section: Knowledge & Practice vertically stacked */}
      <div className="flex flex-col gap-12 pt-8 pb-12">
        {/* Kiến thức nền tảng (Green) */}
        <section className="space-y-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.8s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-4">
              Kiến thức nền tảng
            </h2>
          </div>
          <PromptKnowledge />
        </section>

        {/* Áp dụng (Thực hành so sánh) (Purple) */}
        <section className="space-y-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '1.0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-purple-500 pl-4">
              Áp dụng thực tế
            </h2>
          </div>
          <div className="w-full">
            <PromptCompareLab />
          </div>
        </section>
      </div>
    </main>
  );
}
