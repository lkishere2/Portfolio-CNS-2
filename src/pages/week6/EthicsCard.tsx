import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Eye, ShieldCheck, Lock, Scale, HeartHandshake, Lightbulb } from "lucide-react";

export default function EthicsCard() {
  const principles = [
    { title: "Minh bạch", desc: "Luôn công khai việc sử dụng AI trong các sản phẩm.", icon: Eye, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
    { title: "Kiểm chứng", desc: "Kiểm tra chéo (fact-checking) với các nguồn đáng tin cậy.", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
    { title: "Bảo mật", desc: "Không nhập dữ liệu cá nhân hay nhạy cảm vào các prompt.", icon: Lock, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
    { title: "Bản quyền", desc: "Sử dụng AI có đạo đức, không sao chép nguyên xi tác phẩm người khác.", icon: Scale, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
    { title: "Bao hàm", desc: "Tránh tạo ra nội dung chứa định kiến hoặc phân biệt đối xử.", icon: HeartHandshake, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
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
            className={`p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group ${idx === 4 ? "sm:col-span-2 md:col-span-1" : ""}`}
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
        className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 shadow-xl mt-auto"
      >
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-rose-500/20 blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="hidden md:block absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shrink-0 shadow-lg">
            <Lightbulb className="w-7 h-7 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-3">
              Giải pháp cho thách thức đạo đức
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Khi đối mặt với rủi ro như <strong>Deepfake</strong> hay <strong>thiên kiến dữ liệu</strong>, tư duy phản biện (Critical Thinking) là vũ khí quan trọng nhất. Cần có cơ chế <span className="text-pink-400 font-semibold">"Human-in-the-loop"</span> — con người luôn là người ra quyết định cuối cùng, kiểm duyệt đầu ra của AI trước khi công bố.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
