import { KanbanSquare, FileText, MessageSquare, Network } from "lucide-react";

export default function CollaborationTools() {
  const tools = [
    {
      name: "Trello / Jira",
      role: "Quản lý dự án",
      desc: "Sử dụng Kanban board để phân công nhiệm vụ, theo dõi tiến độ và đặt deadline cụ thể cho từng thành viên.",
      icon: <KanbanSquare className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100",
      iconColor: "text-blue-600",
      features: ["Lập kế hoạch sprint", "Gắn thẻ (tags)", "Biểu đồ tiến độ"],
    },
    {
      name: "Notion / Google Docs",
      role: "Tài liệu & Tri thức",
      desc: "Không gian làm việc chung để viết tài liệu, lưu trữ biên bản cuộc họp và brainstorm ý tưởng real-time.",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-gradient-to-br from-rose-50 to-orange-50 border-rose-100",
      iconColor: "text-rose-600",
      features: ["Đồng chỉnh sửa", "Lịch sử phiên bản", "Bình luận"],
    },
    {
      name: "Slack / Discord",
      role: "Giao tiếp & Tích hợp",
      desc: "Kênh giao tiếp chính, tích hợp webhook từ GitHub/Trello để nhận thông báo tự động về tiến độ dự án.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100",
      iconColor: "text-purple-600",
      features: ["Kênh theo chủ đề", "Gọi video", "Bot tự động"],
    },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-sm h-full">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 shadow-inner">
          <Network className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Hệ sinh thái công cụ hợp tác</h2>
          <p className="text-sm text-gray-500 mt-1">Các nền tảng cốt lõi giúp tối ưu hóa làm việc nhóm</p>
        </div>
      </div>

      <div className="grid gap-6">
        {tools.map((tool, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border ${tool.color} relative overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
            {/* Background decoration */}
            <div className={`absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 ${tool.iconColor}`}>
              <div className="w-32 h-32">{tool.icon}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
              <div className={`p-4 bg-white rounded-xl shadow-sm ${tool.iconColor}`}>
                {tool.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <h4 className="font-bold text-xl text-gray-800">{tool.name}</h4>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-white rounded uppercase tracking-widest shadow-sm text-gray-600 border border-white">
                    {tool.role}
                  </span>
                </div>
                <p className="text-base text-gray-700 mb-4 leading-relaxed">
                  {tool.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((f, i) => (
                    <span key={i} className={`text-xs font-semibold bg-white/80 px-2.5 py-1 rounded-md shadow-sm border border-white/50 ${tool.iconColor}`}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
