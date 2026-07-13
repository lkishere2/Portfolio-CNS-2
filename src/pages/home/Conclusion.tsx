import ClosingSentence from "./ClosingSentence";
import { motion } from "framer-motion";
import { FolderTree, Search, MessageSquareText, Users, Palette, Scale } from "lucide-react";

const reflections = [
  {
    icon: <FolderTree className="w-7 h-7 text-cyan-500" />,
    bgClass: "from-cyan-50 to-cyan-100/50",
    title: "Tổ chức thông tin",
    text: "Học được cách đặt tên tệp có hệ thống và xây dựng cấu trúc thư mục logic -- kỹ năng tưởng nhỏ nhưng tiết kiệm rất nhiều thời gian.",
  },
  {
    icon: <Search className="w-7 h-7 text-violet-500" />,
    bgClass: "from-violet-50 to-violet-100/50",
    title: "Tư duy tìm kiếm",
    text: "Biết cách dùng toán tử nâng cao để tìm đúng nguồn học thuật, thay vì chỉ gõ từ khóa và chọn kết quả đầu tiên.",
  },
  {
    icon: <MessageSquareText className="w-7 h-7 text-pink-500" />,
    bgClass: "from-pink-50 to-pink-100/50",
    title: "Giao tiếp với AI",
    text: "Hiểu rằng chất lượng đầu ra của AI phụ thuộc vào cách đặt câu hỏi -- một prompt tốt tạo ra sự khác biệt hoàn toàn.",
  },
  {
    icon: <Users className="w-7 h-7 text-orange-500" />,
    bgClass: "from-orange-50 to-orange-100/50",
    title: "Làm việc nhóm số",
    text: "Trải nghiệm phối hợp đa công cụ (Trello + Google Docs + Messenger) giúp hiểu rõ thế mạnh riêng của từng nền tảng.",
  },
  {
    icon: <Palette className="w-7 h-7 text-teal-500" />,
    bgClass: "from-teal-50 to-teal-100/50",
    title: "Sáng tạo với AI",
    text: "AI không thay thế sáng tạo -- nó tăng tốc quá trình, còn tư duy và thẩm mỹ vẫn phải đến từ con người.",
  },
  {
    icon: <Scale className="w-7 h-7 text-red-500" />,
    bgClass: "from-red-50 to-red-100/50",
    title: "Trách nhiệm số",
    text: "Sử dụng AI hiệu quả đòi hỏi sự hiểu biết về giới hạn, đạo đức và trách nhiệm -- không chỉ là kỹ năng kỹ thuật.",
  },
];

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="hidden md:block absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-pink-50/50 blur-3xl" />
        <div className="hidden md:block absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-rose-50/50 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-pink-400 uppercase tracking-widest mb-3">
            Nhìn lại hành trình
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Những bài học giá trị nhất
          </h2>
          <p className="text-gray-500 text-lg mt-2 max-w-2xl mx-auto leading-relaxed">
            Hành trình học tập vừa qua không chỉ là việc sử dụng công cụ, mà là quá trình thay đổi tư duy làm việc và học tập trong kỷ nguyên số.
          </p>
        </motion.div>

        {/* Reflection grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {reflections.map((r) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              key={r.title}
              className="flex flex-col gap-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(236,72,153,0.08)] hover:border-pink-200 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.bgClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3 shadow-inner`}>
                {r.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-pink-600 transition-colors">{r.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote / closing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ClosingSentence />
        </motion.div>

      </div>
    </section>
  );
}