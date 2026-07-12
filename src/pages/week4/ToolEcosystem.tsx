import { LayoutList, MessageCircle, FileCode2, Share2 } from "lucide-react";

export default function ToolEcosystem() {
  const tools = [
    {
      name: "Trello / Notion",
      category: "Quản lý dự án",
      icon: <LayoutList className="w-5 h-5 text-pink-500" />,
      desc: "Lên kế hoạch, tạo Kanban board và theo dõi tiến độ công việc minh bạch.",
      color: "bg-pink-50 border-pink-100"
    },
    {
      name: "Slack / Discord",
      category: "Giao tiếp & Sync",
      icon: <MessageCircle className="w-5 h-5 text-blue-500" />,
      desc: "Kênh giao tiếp thời gian thực, phân chia channel rõ ràng cho từng team.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      name: "Google Workspace",
      category: "Lưu trữ & Soạn thảo",
      icon: <Share2 className="w-5 h-5 text-emerald-500" />,
      desc: "Cộng tác chỉnh sửa tài liệu cùng lúc, lưu trữ đám mây an toàn.",
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      name: "GitHub / GitLab",
      category: "Quản lý phiên bản",
      icon: <FileCode2 className="w-5 h-5 text-purple-500" />,
      desc: "Đóng góp mã nguồn (hoặc dữ liệu), kiểm soát phiên bản tránh xung đột.",
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-pink-600 shadow-inner">
          <Share2 className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Hệ sinh thái Công cụ</h2>
          <p className="text-sm text-gray-500 mt-1">Các phần mềm trụ cột trong quy trình làm việc nhóm</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((tool, idx) => (
          <div key={idx} className={`rounded-xl p-5 border ${tool.color} hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group`}>
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {tool.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">
                {tool.category}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-base mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
