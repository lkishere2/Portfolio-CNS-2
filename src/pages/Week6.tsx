import FileViewer from "../components/FileViewer";
import GoalItem from "../components/GoalItem";
import PageNav from "../components/PageNav";
import EthicsCard from "./week6/EthicsCard";
import ResponsibleAIVisual from "./week6/ResponsibleAIVisual";

export default function Week6() {
  const goals = [
    "Nhận diện và phòng tránh rủi ro an ninh mạng, bảo vệ Dấu chân số cá nhân.",
    "Thực hành nguyên tắc Liêm chính học thuật, phòng chống đạo văn (Plagiarism).",
    "Sử dụng AI tạo sinh có trách nhiệm, minh bạch & tuân thủ pháp luật.",
    "Xây dựng bộ nguyên tắc cá nhân và cơ chế kiểm duyệt 'Human-in-the-loop'."
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-12">
      {/* Page Header */}
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 6 · Nhiệm vụ 6
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              An toàn & Liêm chính{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                môi trường số
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Trang bị tư duy phản biện, kỹ năng bảo vệ danh tính số, phòng chống lừa đảo mạng và sử dụng Trí tuệ Nhân tạo (AI) một cách có đạo đức, trách nhiệm.
            </p>
          </div>
          <PageNav prev={{ path: "/week5", label: "Week 5" }} next={{ path: "/summary", label: "Tổng kết" }} />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col gap-12 sm:gap-16">
        
        {/* Row 1: Goals (Left) + Visual & File Viewer (Right) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Visual + File Viewer */}
          <div className="lg:order-last opacity-0 animate-slide-in-right transform origin-left will-change-transform transform-gpu" style={{ animationDelay: '0.4s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
            <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col justify-between border border-pink-50">
              
              {/* Responsible AI Visual on top */}
              <div className="mb-10 w-full flex justify-center">
                <ResponsibleAIVisual />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
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
                    filename="week6.pdf"
                    label="Báo cáo tuần 6 - AI có trách nhiệm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.2s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50 h-full flex flex-col justify-center">
              <h2 className="text-sm font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-3 mb-6">
                Mục tiêu cốt lõi
              </h2>
              <div className="flex flex-col gap-5">
                {goals.map((goal, idx) => (
                  <GoalItem key={idx} text={goal} delay={`${0.3 + idx * 0.15}s`} />
                ))}
              </div>
            </div>
          </div>


        </div>

        {/* Row 2: Ethics Card (Full width) */}
        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.5s', animationDuration: '1s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Bộ Nguyên Tắc Cá Nhân</h2>
              <p className="text-sm text-gray-500 mt-1">Các chuẩn mực đạo đức và an ninh mạng khi tương tác trên không gian số</p>
            </div>
          </div>
          
          <EthicsCard />
        </div>

      </div>
    </main>
  );
}
