import { GitCommit, GitPullRequest, GitMerge, CheckCircle2 } from "lucide-react";

export default function TeamWorkflow() {
  const steps = [
    {
      title: "1. Khởi tạo & Phân công",
      desc: "Trưởng nhóm tạo dự án trên Trello, chia nhỏ task và gán cho từng thành viên kèm deadline.",
      icon: <GitCommit className="w-5 h-5 text-gray-400" />,
      color: "border-gray-200"
    },
    {
      title: "2. Thực thi & Thảo luận",
      desc: "Các thành viên làm việc trên Notion/Docs. Mọi vướng mắc được thảo luận ngay trong thread của Slack.",
      icon: <GitPullRequest className="w-5 h-5 text-blue-500" />,
      color: "border-blue-200"
    },
    {
      title: "3. Tích hợp & Review",
      desc: "Sản phẩm được đẩy lên thư mục chung. Trưởng nhóm review chéo, để lại comment cần sửa chữa.",
      icon: <GitMerge className="w-5 h-5 text-purple-500" />,
      color: "border-purple-200"
    },
    {
      title: "4. Hoàn thiện & Đóng gói",
      desc: "Cập nhật trạng thái task thành 'Done'. Tổng hợp tài liệu thành báo cáo hoàn chỉnh.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      color: "border-emerald-200"
    }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 lg:p-8">
      <div className="mb-8 border-b border-gray-50 pb-4">
        <h2 className="text-xl font-bold text-gray-800">Quy trình Thực chiến</h2>
        <p className="text-sm text-gray-500 mt-1">Chu trình khép kín đảm bảo dự án luôn đi đúng hướng</p>
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
              <div className="pt-2">
                <h3 className="font-bold text-gray-800 text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
