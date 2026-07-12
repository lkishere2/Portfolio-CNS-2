import FileViewer from "../components/FileViewer";
import GoalItem from "../components/GoalItem";
import EthicsCard from "./week6/EthicsCard";
import PageNav from "../components/PageNav";

export default function Week6() {
  const goals = [
    "Xây dựng bộ nguyên tắc cá nhân rõ ràng (5-7 điều).",
    "Phân tích sâu sắc các vấn đề đạo đức AI.",
    "Tư duy phản biện cao trước rủi ro AI.",
    "Đề xuất giải pháp thiết thực cho các thách thức."
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-12">
      {/* Page Header */}
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 6 · Nhiệm vụ 6
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Sử dụng AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                có trách nhiệm
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Xây dựng bộ nguyên tắc cá nhân trong việc ứng dụng AI. Phân tích sâu sắc các vấn đề đạo đức, thiên kiến, và rủi ro bảo mật.
            </p>
          </div>
          <PageNav prev={{ path: "/week5", label: "Week 5" }} next={{ path: "/summary", label: "Tổng kết" }} />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Column: FileViewer and Goals */}
        <div className="w-full lg:w-1/3 flex flex-col gap-10 lg:sticky lg:top-8 z-10 h-fit">
          
          {/* Báo cáo minh chứng */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 px-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span> Báo cáo nộp bài
            </h2>
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week6.pdf" 
                label="Báo cáo tuần 6 - Nguyên tắc ứng xử với AI"
              />
            </div>
          </div>
          
          {/* Goal Items */}
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-2 mb-2 opacity-0 animate-slide-in-right" style={{ animationDelay: '0.6s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
              🎯 Mục tiêu cốt lõi
            </h2>
            <div className="flex flex-col gap-3">
              {goals.map((goal, idx) => (
                <GoalItem key={idx} text={goal} delay={`${0.8 + idx * 0.15}s`} />
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Ethics Cards */}
        <div className="w-full lg:w-2/3 opacity-0 animate-slide-in-right" style={{ animationDelay: '1s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          <EthicsCard />
        </div>

      </div>
    </main>
  );
}
