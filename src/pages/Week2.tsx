import FileViewer from "../components/FileViewer";
import GoalItem from "../components/GoalItem";
import SearchBar from "./week2/SearchBar";
import SearchingKnowledge from "./week2/SearchingKnowledge";
import SourceEvaluation from "./week2/SourceEvaluation";
import FactChecking from "./week2/FactChecking";
import AcademicSources from "./week2/AcademicSources";
import PageNav from "../components/PageNav";

export default function Week2() {
  const goals = [
    "Tìm kiếm nâng cao: Áp dụng toán tử logic và bộ lọc để trích xuất dữ liệu học thuật.",
    "Khai thác kho tài liệu: Sử dụng Google Scholar để tìm kiếm tài liệu peer-reviewed.",
    "Đánh giá tài liệu: Phân tích độ tin cậy và giá trị học thuật bằng tiêu chuẩn CRAAP.",
    "Kiểm chứng thông tin: Sử dụng kỹ thuật Đọc ngang (Lateral reading) để chống tin giả."
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-12">
      
      {/* Page Header */}
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 2 · Nhiệm vụ 2
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Tìm kiếm &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Đánh giá thông tin
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Nắm vững kỹ năng tìm kiếm nâng cao và phương pháp đánh giá độ tin cậy của thông tin học thuật trong kỷ nguyên số.
            </p>
          </div>
          <PageNav prev={{ path: "/week1", label: "Week 1" }} next={{ path: "/week3", label: "Week 3" }} />
        </div>
      </div>

      {/* SearchBar Hero Section */}
      <div className="mb-8">
        <SearchBar />
      </div>

      {/* Container 1: Report/Goals & SearchingKnowledge */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Column: Report & Goals */}
        <div className="flex flex-col gap-10 opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '1.4s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          
          {/* Báo cáo minh chứng */}
          <div>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 px-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span> Báo cáo nộp bài
            </h2>
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week2.pdf"
                label="Báo cáo tuần 2 - Tìm kiếm và đánh giá thông tin"
              />
            </div>
          </div>

          {/* Mục tiêu cốt lõi */}
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-2 mb-2">
              Mục tiêu cốt lõi
            </h2>
            <div className="flex flex-col gap-3">
              {goals.map((goal, idx) => (
                <GoalItem key={idx} text={goal} delay={`${1.4 + idx * 0.15}s`} />
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Column: SearchingKnowledge */}
        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '1.6s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          <SearchingKnowledge />
        </div>
      </div>

      {/* Container 2: AcademicSources & FactChecking */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-4">
        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '1.8s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          <AcademicSources />
        </div>
        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '2.0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
          <FactChecking />
        </div>
      </div>

      {/* Container 3: SourceEvaluation */}
      <div className="pt-4 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '2.2s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <SourceEvaluation />
      </div>
    </main>
  );
}