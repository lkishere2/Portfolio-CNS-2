import FileViewer from "../components/FileViewer";
import CollaborationTools from "./week4/CollaborationTools";
import PageNav from "../components/PageNav";
import { Target, FileText } from "lucide-react";

export default function Week4() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 4 · Nhiệm vụ 4
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Làm việc nhóm &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                Phần mềm cộng tác
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Tối ưu hóa hiệu suất làm việc nhóm từ xa bằng cách ứng dụng các công cụ cộng tác trực tuyến hiện đại.
            </p>
          </div>
          <PageNav prev={{ path: "/week3", label: "Week 3" }} next={{ path: "/week5", label: "Week 5" }} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 space-y-8 lg:sticky lg:top-8 z-10 h-fit">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 rounded-2xl p-6 shadow-sm opacity-0 animate-slide-in-right" style={{ animationDelay: '0.5s', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <h2 className="text-base font-bold text-pink-700 uppercase tracking-wide mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-pink-500" /> Mục tiêu cốt lõi
            </h2>
            <ul className="space-y-3 text-base text-gray-700">
              {[
                "Sử dụng công cụ hiệu quả để lập kế hoạch và phân công.",
                "Tích hợp các tính năng nâng cao (automation, webhook).",
                "Theo dõi tiến độ bằng Kanban và Gantt chart.",
                "Mô tả chi tiết cách tối ưu hóa quy trình làm việc nhóm.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-pink-400 mt-0.5 shrink-0">✦</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.8s', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-3 px-1 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" /> Báo cáo dự án
            </h2>
            <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.03]">
              <FileViewer
                filename="week4_collaboration.pdf"
                label="Báo cáo tuần 4 - Kế hoạch và quản lý dự án nhóm"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationDuration: '1s', animationFillMode: 'forwards' }}>
          <CollaborationTools />
        </div>
      </div>
    </main>
  );
}
