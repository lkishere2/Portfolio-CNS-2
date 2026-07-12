import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FileViewer from "../components/FileViewer";
import GoalItem from "../components/GoalItem";
import PageNav from "../components/PageNav";
import { BarChart3, Zap, ShieldCheck } from "lucide-react";

// Components for tabs
import DataVisual from "./week6/DataVisual";
import DataContent from "./week6/DataContent";
import AutomationVisual from "./week6/AutomationVisual";
import AutomationContent from "./week6/AutomationContent";
import SecurityVisual from "./week6/SecurityVisual";
import EthicsCard from "./week6/EthicsCard"; // Re-used for Security Content

type TabKey = "data" | "automation" | "security";

export default function Week6() {
  const [activeTab, setActiveTab] = useState<TabKey>("data");

  const tabData = {
    data: {
      id: "data",
      label: "Phân tích Dữ liệu",
      icon: BarChart3,
      color: "blue",
      goals: [
        "Sử dụng AI (Advanced Data Analysis) để làm sạch dữ liệu.",
        "Phân tích xu hướng và trích xuất thông tin hữu ích.",
        "Trực quan hóa dữ liệu bằng các biểu đồ sinh động."
      ],
      Visual: DataVisual,
      Content: DataContent
    },
    automation: {
      id: "automation",
      label: "Tự động hóa",
      icon: Zap,
      color: "amber",
      goals: [
        "Hiểu nguyên lý cơ bản của Tự động hóa (Trigger & Action).",
        "Sử dụng nền tảng No-Code (Zapier/Make) để liên kết App.",
        "Xây dựng thành công một quy trình tự động hóa thực tế."
      ],
      Visual: AutomationVisual,
      Content: AutomationContent
    },
    security: {
      id: "security",
      label: "Bảo mật & Đạo đức",
      icon: ShieldCheck,
      color: "emerald",
      goals: [
        "Xây dựng bộ nguyên tắc cá nhân rõ ràng khi dùng AI.",
        "Nhận diện và phòng tránh lừa đảo (Phishing), mã độc.",
        "Bảo vệ dữ liệu cá nhân, không chia sẻ thông tin nhạy cảm."
      ],
      Visual: SecurityVisual,
      Content: EthicsCard
    }
  };

  const tabs: TabKey[] = ["data", "automation", "security"];
  const currentTab = tabData[activeTab];
  const VisualComponent = currentTab.Visual;
  const ContentComponent = currentTab.Content;

  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 sm:py-12 overflow-hidden space-y-10">
      {/* Page Header */}
      <div className="border-b border-gray-100 pb-6 opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-bold rounded-full uppercase tracking-widest mb-3 shadow-sm">
              Week 6 · Nhiệm vụ 6
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Sử dụng AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                có trách nhiệm
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
              Ứng dụng AI trong Phân tích Dữ liệu, Tự động hóa quy trình làm việc, đồng thời thấu hiểu và tuân thủ các nguyên tắc Bảo mật & Đạo đức số.
            </p>
          </div>
          <PageNav prev={{ path: "/week5", label: "Week 5" }} next={{ path: "/summary", label: "Tổng kết" }} />
        </div>
      </div>

      {/* Static File Viewer */}
      <div className="opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
          <h2 className="text-sm font-bold text-pink-700 uppercase tracking-widest px-1">
            Báo cáo nộp bài
          </h2>
        </div>
        <div className="scale-[1.01] transform-gpu transition-transform hover:scale-[1.02]">
          <FileViewer
            filename="week6.pdf" 
            label="Báo cáo tuần 6 - Sử dụng AI có trách nhiệm"
          />
        </div>
      </div>

      {/* Custom Tabs Navigation */}
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start opacity-0 animate-fade-in-up will-change-transform transform-gpu" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        {tabs.map((tabKey) => {
          const tab = tabData[tabKey];
          const isActive = activeTab === tabKey;
          const Icon = tab.icon;
          
          let colorClasses = "";
          if (isActive) {
            if (tab.color === "blue") colorClasses = "bg-blue-500 text-white shadow-md shadow-blue-500/20 border-blue-500";
            if (tab.color === "amber") colorClasses = "bg-amber-500 text-white shadow-md shadow-amber-500/20 border-amber-500";
            if (tab.color === "emerald") colorClasses = "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 border-emerald-500";
          } else {
            colorClasses = "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-800";
          }

          return (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all border ${colorClasses}`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-sm min-h-[600px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-10 items-start"
          >
            {/* Left Column: Visual */}
            <div className="w-full lg:w-1/3 flex justify-center lg:sticky lg:top-8 z-10 h-fit">
              <VisualComponent />
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 relative z-0">
              
              {/* Report & Goals Grid */}
              <div className="grid grid-cols-1 gap-6">
                {/* Goals */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                  <h2 className={`text-sm font-bold uppercase tracking-wide border-b border-gray-100 pb-2 mb-3 text-${currentTab.color}-700`}>
                    Mục tiêu cốt lõi
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3">
                    {currentTab.goals.map((goal, idx) => (
                      <GoalItem key={idx} text={goal} delay={`${0.2 + idx * 0.1}s`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Specific Content */}
              <div className="pt-2">
                <ContentComponent />
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </main>
  );
}
