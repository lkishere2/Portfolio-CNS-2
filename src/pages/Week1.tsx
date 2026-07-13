import FileViewer from "../components/FileViewer";
import BigFolder from "./week1/BigFolder";
import GoalItem from "../components/GoalItem";
import BasicTasks from "./week1/BasicTasks";
import FileSystemConcepts from "./week1/FileSystemConcepts";
import ShortcutKeys from "./week1/ShortcutKeys";
import PageNav from "../components/PageNav";

export default function Week1() {
  const goals = [
    "Thao tác cơ bản: Tạo, đổi tên, sao chép, di chuyển, xóa tệp/thư mục.",
    "Khôi phục và xóa vĩnh viễn dữ liệu (Recycle Bin/Shift+Delete).",
    "Sử dụng phím tắt cơ bản (Win+E, Ctrl+C, Ctrl+V, v.v.).",
    "Kỹ năng chụp ảnh màn hình và lập báo cáo minh chứng."
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-12">
      {/* Page Header */}
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 1 · Nhiệm vụ 1
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Hệ điều hành &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Kiến trúc
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Khám phá cách hệ điều hành quản lý tệp, thư mục và cách xây dựng tư duy lưu trữ dữ liệu khoa học.
            </p>
          </div>
          <PageNav next={{ path: "/week2", label: "Week 2" }} />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Column: Big Folder */}
        <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-8 z-10 perspective-[1200px] h-fit">
          <BigFolder />
        </div>

        {/* Right Column: Components appearing from right after 1s */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 relative z-0">

          {/* File Viewer (Báo cáo minh chứng) - MOVED TO TOP AND ENHANCED */}
          <div className="opacity-0 animate-slide-in-right transform origin-left will-change-transform transform-gpu" style={{ animationDelay: '0.2s', animationDuration: '1s' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
              <h2 className="text-sm font-bold text-pink-700 uppercase tracking-widest px-1">
                Báo cáo nộp bài
              </h2>
            </div>
            {/* Wrapper to scale it up slightly to make it bigger and more prominent */}
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week1.pdf"
                label="Báo cáo tuần 1 - Thao tác cơ bản với tệp tin và thư mục"
              />
            </div>
          </div>
          
          {/* Goal Items */}
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-2 mb-2 opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.4s', animationDuration: '1s' }}>
              Mục tiêu cốt lõi
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {goals.map((goal, idx) => (
                <GoalItem key={idx} text={goal} delay={`${0.6 + idx * 0.15}s`} />
              ))}
            </div>
          </div>

          {/* Core Basic Tasks List */}
          <div className="opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.8s', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <BasicTasks />
          </div>

        </div>
      </div>

      {/* Full-width Section: Concepts & Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '1.0s', animationDuration: '1s', animationFillMode: 'forwards' }}>
          <FileSystemConcepts />
        </div>

        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '1.2s', animationDuration: '1s', animationFillMode: 'forwards' }}>
          <ShortcutKeys />
        </div>
      </div>
    </main>
  );
}
