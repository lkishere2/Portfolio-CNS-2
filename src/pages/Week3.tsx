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
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
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
        
        {/* Left Column: Goals & Report */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:sticky lg:top-8 z-10 h-fit opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          
          {/* Báo cáo minh chứng */}
          <div>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 px-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span> Báo cáo nộp bài
            </h2>
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week3.pdf"
                label="Báo cáo tuần 3 - Viết Prompt hiệu quả"
              />
            </div>
          </div>

          {/* Mục tiêu cốt lõi */}
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-2 mb-2">
              🎯 Mục tiêu cốt lõi
            </h2>
            <div className="flex flex-col gap-3">
              {goals.map((goal, idx) => (
                <GoalItem key={idx} text={goal} delay={`${0.4 + idx * 0.15}s`} />
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: Content */}
        <div className="w-full lg:w-2/3 space-y-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          
          {/* Laptop Animation Hero */}
          <div className="w-full bg-gray-50/50 border border-gray-100 rounded-3xl p-6 md:p-10 flex justify-center shadow-sm">
            <div className="transform-gpu scale-[0.85] sm:scale-100 origin-center transition-transform duration-500">
              <Laptop />
            </div>
          </div>
          
          {/* Kiến thức */}
          <section className="space-y-8 pt-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">
                Kiến thức nền tảng
              </h2>
            </div>
            <PromptKnowledge />
          </section>

          {/* Áp dụng (Thực hành so sánh) */}
          <section className="space-y-8 pt-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-purple-500 pl-4">
                Áp dụng & Đánh giá
              </h2>
            </div>
            <div className="w-full">
              <PromptCompareLab />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
