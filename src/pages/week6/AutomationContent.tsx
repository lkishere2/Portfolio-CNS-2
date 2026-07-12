import { motion } from "framer-motion";
import { Zap, PlayCircle, Settings2, Code2 } from "lucide-react";

export default function AutomationContent() {
  const steps = [
    { title: "Kích hoạt (Trigger)", desc: "Sự kiện bắt đầu (VD: Nhận email mới).", icon: PlayCircle, color: "text-amber-500", bg: "bg-amber-50" },
    { title: "Xử lý (Action)", desc: "Các bước thực thi (VD: Lưu vào Sheets).", icon: Settings2, color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Không mã hóa (No-Code)", desc: "Chỉ cần kéo thả, không cần biết lập trình.", icon: Code2, color: "text-red-500", bg: "bg-red-50" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-3 gap-4">
        {steps.map((s, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
            className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <s.icon className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm mb-1">{s.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 p-6 sm:p-8 shadow-xl"
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center shrink-0 shadow-lg">
            <Zap className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">
              Tối ưu hiệu suất với Zapier / Make
            </h4>
            <p className="text-amber-100 text-sm leading-relaxed">
              Hãy để máy móc làm những việc lặp đi lặp lại. Bạn có thể xây dựng một quy trình tự động trong 5 phút:<br/>
              <span className="font-semibold text-white">Bước 1:</span> Chọn Trigger (Khi có form đăng ký mới)<br/>
              <span className="font-semibold text-white">Bước 2:</span> Chọn Action (Gửi email cảm ơn tự động & Thông báo qua Slack).
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
