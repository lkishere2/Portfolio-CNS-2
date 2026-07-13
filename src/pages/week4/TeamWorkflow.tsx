import { GitCommit, GitPullRequest, CheckCircle2, Zap, LayoutList } from "lucide-react";

function KanbanIllustration() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-3 hidden sm:block shadow-inner">
      <div className="flex gap-4">
        <div className="flex-1 bg-gray-100/70 rounded-md p-3 border border-gray-200">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-2 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400"></span> To Do</h4>
          <div className="bg-white p-2.5 rounded border border-gray-200 text-xs text-gray-700 shadow-sm cursor-pointer hover:border-pink-300">
            Nghiên cứu tài liệu
            <div className="flex justify-between items-center mt-3">
              <span className="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded text-[9px] font-bold">High Priority</span>
              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[9px] font-bold border border-blue-200">M</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 bg-gray-100/70 rounded-md p-3 border border-gray-200">
          <h4 className="text-[10px] font-bold text-blue-500 uppercase mb-2 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400"></span> In Progress</h4>
          <div className="bg-white p-2.5 rounded border border-blue-200 text-xs text-gray-700 shadow-sm border-l-4 border-l-blue-400 cursor-pointer hover:border-blue-400">
            Tích hợp Automation
            <div className="flex justify-between items-center mt-3">
              <span className="bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded text-[9px] font-bold">In Review</span>
              <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[9px] font-bold border border-pink-200">K</div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-100/70 rounded-md p-3 border border-gray-200 opacity-70">
          <h4 className="text-[10px] font-bold text-emerald-500 uppercase mb-2 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Done</h4>
          <div className="bg-white p-2.5 rounded border border-emerald-200 text-xs text-gray-500 shadow-sm border-l-4 border-l-emerald-400 line-through">
            Lập kế hoạch dự án
          </div>
        </div>
      </div>
      <p className="text-center text-[10px] text-gray-400 mt-4 italic flex items-center justify-center gap-1">
        <LayoutList className="w-3 h-3" /> Ảnh minh họa: Bảng Kanban phân công & theo dõi tiến độ
      </p>
    </div>
  );
}

export default function TeamWorkflow() {
  const steps = [
    {
      title: "1. Lập kế hoạch & Phân công",
      desc: "Sử dụng Trello/Asana tạo bảng Kanban. Chia nhỏ dự án thành các task cụ thể, gán nhãn (Assignee) và thiết lập Deadline để minh bạch hóa tiến độ.",
      icon: <GitCommit className="w-5 h-5 text-gray-400" />,
      color: "border-gray-200",
      extra: <KanbanIllustration />
    },
    {
      title: "2. Thực thi & Tự động hóa (Advanced)",
      desc: "Tích hợp tính năng nâng cao: Gắn Webhook để tự động gửi thông báo từ Trello sang Slack/Discord mỗi khi có task chuyển trạng thái thành 'Done'.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      color: "border-amber-200"
    },
    {
      title: "3. Thảo luận & Tối ưu luồng làm việc",
      desc: "Làm việc trên Google Docs/Notion theo thời gian thực. Giao tiếp tập trung trong các channel riêng biệt trên Slack để tối ưu hóa quy trình trao đổi.",
      icon: <GitPullRequest className="w-5 h-5 text-blue-500" />,
      color: "border-blue-200"
    },
    {
      title: "4. Review & Đóng gói",
      desc: "Trưởng nhóm kiểm tra chất lượng (Review chéo). Tổng hợp tài liệu thành báo cáo hoàn chỉnh. Dự án kết thúc thành công.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-200"
    }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 lg:p-8">
      <div className="mb-8 border-b border-gray-50 pb-4">
        <h2 className="text-xl font-bold text-gray-800">Tối ưu hóa Quy trình Thực chiến</h2>
        <p className="text-sm text-gray-500 mt-1">Chu trình làm việc nhóm chuyên nghiệp ứng dụng Automation</p>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-100"></div>
        
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex gap-6">
              {/* Timeline marker */}
              <div className={`w-12 h-12 rounded-full bg-white border-2 ${step.color} shadow-sm flex items-center justify-center shrink-0 z-10`}>
                {step.icon}
              </div>
              
              {/* Content */}
              <div className="pt-2 w-full">
                <h3 className="font-bold text-gray-800 text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                  {step.desc}
                </p>
                {step.extra && step.extra}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
