import { motion } from "framer-motion";
import { Database, Filter, LineChart, Sparkles } from "lucide-react";

export default function DataContent() {
  const skills = [
    { title: "Làm sạch dữ liệu", desc: "Sử dụng AI để loại bỏ trùng lặp và chuẩn hóa format.", icon: Filter, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Phân tích xu hướng", desc: "Tìm ra các pattern ẩn giấu trong tập dữ liệu lớn.", icon: LineChart, color: "text-emerald-500", bg: "bg-emerald-50" },
    { title: "Cấu trúc hóa Data", desc: "Biến dữ liệu thô thành bảng biểu gọn gàng, dễ hiểu.", icon: Database, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid sm:grid-cols-3 gap-4">
        {skills.map((s, idx) => (
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
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-cyan-900 p-6 sm:p-8 shadow-xl"
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">
              Bí kíp Prompt: "Advanced Data Analysis"
            </h4>
            <p className="text-blue-100 text-sm leading-relaxed">
              Bạn có thể upload trực tiếp file Excel/CSV lên ChatGPT và sử dụng prompt: <br/>
              <span className="inline-block mt-2 px-3 py-2 bg-black/30 rounded-lg text-cyan-300 font-mono text-xs border border-white/10">
                "Hãy đóng vai một chuyên gia Data Analyst. Phân tích tập dữ liệu này, tìm ra 3 xu hướng quan trọng nhất và vẽ biểu đồ Bar Chart minh họa cho xu hướng số 1."
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
