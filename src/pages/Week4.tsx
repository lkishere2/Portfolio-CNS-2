import FileViewer from "../components/FileViewer";
import GoalItem from "../components/GoalItem";
import CollaborationVisual from "./week4/CollaborationVisual";
import ToolEcosystem from "./week4/ToolEcosystem";
import TeamWorkflow from "./week4/TeamWorkflow";
import PageNav from "../components/PageNav";

export default function Week4() {
  const goals = [
    "Sử dụng công cụ hiệu quả để lập kế hoạch và phân công.",
    "Tích hợp các tính năng nâng cao (automation, webhook).",
    "Theo dõi tiến độ bằng Kanban và Gantt chart.",
    "Mô tả chi tiết cách tối ưu hóa quy trình làm việc nhóm."
  ];
  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
      <div className="mb-10 border-b border-pink-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
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

      <div className="flex flex-col gap-16">
        
        {/* Row 1: Collaboration Visual (Top, Centered, Wide) */}
        <div className="w-full flex justify-center opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.1s', animationDuration: '1s', animationFillMode: 'forwards' }}>
          <CollaborationVisual />
        </div>

        {/* Row 2: Left (Report & Goals) - Right (Tool Ecosystem) */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Left: Report & Goals */}
          <div className="flex flex-col gap-10">
            {/* File Viewer */}
            <div className="opacity-0 animate-slide-in-right transform origin-left bg-white p-6 rounded-2xl shadow-sm border border-pink-50 will-change-transform transform-gpu" style={{ animationDelay: '0.2s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
                <h2 className="text-sm font-bold text-pink-700 uppercase tracking-widest px-1">
                  Báo cáo nộp bài
                </h2>
              </div>
              <div className="scale-[1.02] transform-gpu transition-transform hover:scale-[1.01]">
                <FileViewer
                  filename="week4.pdf"
                  label="Báo cáo tuần 4 - Kế hoạch dự án nhóm"
                />
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50">
              <h2 className="text-sm font-bold text-pink-700 uppercase tracking-wide border-b border-pink-100 pb-3 mb-4 opacity-0 animate-slide-in-right will-change-transform transform-gpu" style={{ animationDelay: '0.3s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
                Mục tiêu cốt lõi
              </h2>
              <div className="flex flex-col gap-4">
                {goals.map((goal, idx) => (
                  <GoalItem key={idx} text={goal} delay={`${0.4 + idx * 0.15}s`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tool Ecosystem */}
          <div className="opacity-0 animate-fade-in-up bg-white p-6 rounded-2xl shadow-sm border border-gray-100 will-change-transform transform-gpu" style={{ animationDelay: '0.5s', animationDuration: '1s', animationFillMode: 'forwards' }}>
            <ToolEcosystem />
          </div>

        </div>

        {/* Row 3: Team Workflow */}
        <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.6s', animationDuration: '1s', animationFillMode: 'forwards' }}>
          <TeamWorkflow />
        </div>

      </div>
    </main>
  );
}
