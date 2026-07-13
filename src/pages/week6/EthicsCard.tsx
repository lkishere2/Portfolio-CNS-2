import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Eye, ShieldCheck, Lock, Scale, Lightbulb, AlertTriangle, FileKey, HeartHandshake } from "lucide-react";

export default function EthicsCard() {
  const principles = [
    { title: "Quản lý Dấu chân số", desc: "Nhận thức rõ Dấu chân số (chủ động & bị động). Hạn chế chia sẻ thông tin cá nhân công khai để bảo vệ danh tính số.", icon: Eye, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
    { title: "Cảnh giác Phishing & QR Code", desc: "Tuyệt đối không quét QR Code lạ dán bừa bãi hoặc click link đáng ngờ giả mạo ngân hàng/trường học.", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
    { title: "Phòng ngừa Malware & Ransomware", desc: "Thường xuyên sao lưu dữ liệu, không tải phần mềm lậu (crack) để tránh bị mã hóa dữ liệu tống tiền.", icon: Lock, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
    { title: "Đối phó AI-Threats & Deepfake", desc: "Cảnh giác cao độ với email lừa đảo hoàn hảo hoặc video/giọng nói giả mạo được tạo bởi Trí tuệ Nhân tạo.", icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
    { title: "Bảo mật Dữ liệu Prompt", desc: "Không bao giờ nhập thông tin cá nhân, dữ liệu nội bộ nhạy cảm vào các công cụ AI công cộng (ChatGPT, Gemini).", icon: FileKey, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
    { title: "Tuân thủ Liêm chính học thuật", desc: "Phòng chống Đạo văn (Plagiarism). Luôn trích dẫn nguồn rõ ràng kể cả khi diễn giải lại (Paraphrase) ý tưởng của người khác.", icon: Scale, color: "text-indigo-500", bg: "bg-indigo-50", border: "border-indigo-100" },
    { title: "Sử dụng AI minh bạch & Đạo đức", desc: "Dùng AI như một trợ lý để học hỏi, không dùng để gian lận hay thi hộ. Luôn kiểm chứng chéo (Fact-check) mọi thông tin AI cung cấp.", icon: HeartHandshake, color: "text-pink-500", bg: "bg-pink-50", border: "border-pink-100" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col gap-8 h-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4"
      >
        {principles.map((p, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className={`p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group ${idx === 6 ? "sm:col-span-2" : ""}`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className={`w-12 h-12 rounded-xl ${p.bg} ${p.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <p.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-800 text-lg">{p.title}</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed pl-1">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-emerald-50 border border-emerald-100 p-8 shadow-sm mt-auto"
      >
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="hidden md:block absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-300/20 to-teal-300/20 blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0 shadow-lg">
            <Lightbulb className="w-7 h-7 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-emerald-900 mb-3">
              Giải pháp An ninh mạng & Đạo đức số
            </h4>
            <p className="text-emerald-800/80 leading-relaxed text-sm sm:text-base">
              Khi đối mặt với các nguy cơ mới như <strong>AI-powered Phishing</strong> (Email lừa đảo do AI viết) hay rủi ro lộ <strong>Dấu chân số</strong>, tư duy phản biện (Critical Thinking) là vũ khí quan trọng nhất. Cần có cơ chế <span className="text-emerald-600 font-bold">"Human-in-the-loop"</span> — con người luôn là người kiểm duyệt thông tin cuối cùng. Tuân thủ <strong>Sử dụng hợp lý (Fair Use)</strong> và <strong>Giấy phép mở (Creative Commons)</strong> để đảm bảo liêm chính học thuật và tôn trọng bản quyền.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
