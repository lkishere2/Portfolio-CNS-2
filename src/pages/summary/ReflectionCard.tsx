import { Search, MessageSquare, Handshake, ShieldCheck, Mountain, Rocket, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import LightbulbCircuit from "./LightbulbCircuit";

export default function ReflectionCard() {
  return (
    <div className="space-y-8">
      
      {/* Introduction / Abstract */}
      <div className="bg-white border-t-4 border-pink-500 rounded-b-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-pink-600" />
          Tóm tắt Kỹ năng & Trải nghiệm
        </h3>
        <p className="text-gray-600 leading-relaxed text-base mb-8">
          Qua khóa học Kỹ năng số ứng dụng AI, em đã có cái nhìn sâu sắc và toàn diện về cách thức trí tuệ nhân tạo đang định hình lại phương pháp học tập, nghiên cứu và làm việc. Dưới đây là 4 trụ cột kỹ năng trọng tâm đã được rèn luyện:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
          <LightbulbCircuit />
          
          {/* Skill 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.1 }}
            className="p-5 rounded-xl bg-red-500 hover:bg-red-600 shadow-sm hover:shadow-md transition-all duration-300 relative z-10"
          >
            <h4 className="font-bold text-white mb-3 flex items-center gap-3 text-sm">
              <div className="p-1.5 bg-white/20 text-white rounded-md">
                <Search className="w-4 h-4" />
              </div>
              Kỹ năng Nghiên cứu
            </h4>
            <p className="text-sm text-white/90 leading-relaxed">Sử dụng toán tử tìm kiếm nâng cao để định vị nguồn học thuật đáng tin cậy nhanh chóng và chính xác.</p>
          </motion.div>
          {/* Skill 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
            className="p-5 rounded-xl bg-green-500 hover:bg-green-600 shadow-sm hover:shadow-md transition-all duration-300 relative z-10"
          >
            <h4 className="font-bold text-white mb-3 flex items-center gap-3 text-sm">
              <div className="p-1.5 bg-white/20 text-white rounded-md">
                <MessageSquare className="w-4 h-4" />
              </div>
              Prompt Engineering
            </h4>
            <p className="text-sm text-white/90 leading-relaxed">Làm chủ nghệ thuật giao tiếp với AI thông qua các framework như CREATE, thiết lập ngữ cảnh và vai trò.</p>
          </motion.div>
          {/* Skill 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}
            className="p-5 rounded-xl bg-blue-500 hover:bg-blue-600 shadow-sm hover:shadow-md transition-all duration-300 relative z-10"
          >
            <h4 className="font-bold text-white mb-3 flex items-center gap-3 text-sm">
              <div className="p-1.5 bg-white/20 text-white rounded-md">
                <Handshake className="w-4 h-4" />
              </div>
              Hợp tác & Quản lý
            </h4>
            <p className="text-sm text-white/90 leading-relaxed">Biết cách tích hợp công cụ số (Notion, Trello) để quản lý dự án nhóm hiệu quả trong môi trường làm việc từ xa.</p>
          </motion.div>
          {/* Skill 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.4 }}
            className="p-5 rounded-xl bg-yellow-500 hover:bg-yellow-600 shadow-sm hover:shadow-md transition-all duration-300 relative z-10"
          >
            <h4 className="font-bold text-white mb-3 flex items-center gap-3 text-sm">
              <div className="p-1.5 bg-white/20 text-white rounded-md">
                <ShieldCheck className="w-4 h-4" />
              </div>
              Đạo đức AI
            </h4>
            <p className="text-sm text-white/90 leading-relaxed">Xây dựng ý thức về sự minh bạch, bản quyền và tác động xã hội khi ứng dụng các công cụ Generative AI.</p>
          </motion.div>
        </div>
      </div>

      {/* Two Columns: Challenges & Future */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Challenges */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-2xl p-8 shadow-sm flex flex-col h-full"
        >
          <h4 className="font-bold text-pink-900 mb-4 flex items-center gap-2 text-base uppercase tracking-wide border-b border-pink-100 pb-3">
            <Mountain className="w-5 h-5 text-pink-500" />
            Thách thức & Vượt qua
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm mb-6 flex-1">
            Ban đầu, việc sử dụng AI thường dừng lại ở mức hỏi-đáp hời hợt, dẫn đến kết quả trả về thiếu chiều sâu chuyên môn và dễ gặp tình trạng ảo giác (hallucinations). Thách thức lớn nhất là học cách xây dựng chuỗi tư duy (chain of thought), đặt đúng ngữ cảnh và luôn duy trì thói quen kiểm chứng (fact-check) bằng các nguồn học thuật uy tín.
          </p>
          <div className="bg-pink-100/60 border-l-[3px] border-pink-400 p-4 rounded-r-lg">
            <p className="text-sm font-medium text-pink-900 italic leading-relaxed">
              "AI là một người trợ lý nghiên cứu đắc lực, nhưng tư duy phản biện của con người mới là yếu tố quyết định tính đúng đắn."
            </p>
          </div>
        </motion.div>

        {/* Future Application */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="bg-gradient-to-br from-white to-pink-50 border border-pink-100 rounded-2xl p-8 shadow-sm flex flex-col h-full"
        >
          <h4 className="font-bold text-pink-900 mb-4 flex items-center gap-2 text-base uppercase tracking-wide border-b border-pink-100 pb-3">
            <Rocket className="w-5 h-5 text-pink-500" />
            Định hướng & Ứng dụng
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm mb-4">
            Trong tương lai, em dự định áp dụng triệt để bộ kỹ năng này vào môi trường đại học và công việc chuyên môn:
          </p>
          <ul className="list-disc list-outside ml-4 space-y-2.5 text-sm text-gray-700 flex-1">
            <li className="pl-1">Sử dụng thành thạo AI để tổng hợp tài liệu, lập dàn ý và hỗ trợ nghiên cứu khoa học.</li>
            <li className="pl-1">Ứng dụng các công cụ No-code để tối ưu hóa quy trình làm việc cá nhân.</li>
            <li className="pl-1">Luôn tuân thủ nguyên tắc sử dụng AI minh bạch, trích dẫn rõ ràng và có trách nhiệm.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
