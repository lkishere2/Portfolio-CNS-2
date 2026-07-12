import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Sparkles, Bot, AlertTriangle, ArrowUpRight } from "lucide-react";

export default function PromptCompareLab() {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3 | 4>(1);

  const levels = [
    { id: 1, label: "Level 1" },
    { id: 2, label: "Level 2" },
    { id: 3, label: "Level 3" },
    { id: 4, label: "Level 4" },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shadow-inner">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800">Sự tiến hóa của Prompt</h2>
          <p className="text-sm text-gray-500">Bài toán thực tế: Tạo đề thi IELTS Writing Task 2</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 p-1 rounded-xl mb-6 relative">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setActiveLevel(level.id as 1|2|3|4)}
            className={`flex-1 py-2.5 text-sm sm:text-base font-bold rounded-lg z-10 transition-colors ${
              activeLevel === level.id 
                ? "text-purple-700"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {level.label}
          </button>
        ))}
        
        {/* Animated Background Tab */}
        <motion.div
          className="absolute top-1 bottom-1 w-[calc(25%-2px)] bg-white rounded-lg shadow-sm"
          animate={{
            left: `${(activeLevel - 1) * 25}%`,
            marginLeft: activeLevel === 1 ? "4px" : "0px", // Minor offset adjustment
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {/* LEVEL 1 */}
          {activeLevel === 1 && (
            <motion.div
              key="level1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2 items-end">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Câu lệnh (Ngây ngô)</span>
                <div className="bg-red-500 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm text-base">
                  "Tạo đề thi IELTS Writing."
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-purple-500" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block">AI Phản hồi</span>
                  <div className="bg-white border border-gray-200 shadow-sm text-gray-800 p-4 rounded-2xl rounded-tl-sm text-base">
                    <p>Dưới đây là một đề thi IELTS Writing Task 2:</p>
                    <p className="mt-2 font-medium">Some people think that children should learn to play a musical instrument. To what extent do you agree or disagree?</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-red-50 border border-red-100 p-4 rounded-xl">
                <h4 className="font-bold text-red-700 text-base flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4" /> Đánh giá Level 1 (Kém)
                </h4>
                <ul className="text-sm md:text-base text-red-900/80 space-y-1 list-disc list-inside">
                  <li><strong>Lỗi cơ chế:</strong> Chỉ có 1 phiên bản prompt duy nhất. Không ngữ cảnh.</li>
                  <li><strong>Tác hại:</strong> AI tự biên tự diễn, trả về kết quả ngẫu nhiên.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* LEVEL 2 */}
          {activeLevel === 2 && (
            <motion.div
              key="level2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2 items-end">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Câu lệnh (Cải tiến nhẹ)</span>
                <div className="bg-amber-500 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm text-base">
                  "Tạo 1 đề thi IELTS Writing Task 2 về chủ đề Giáo dục cho người học."
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-purple-500" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block">AI Phản hồi</span>
                  <div className="bg-white border border-gray-200 shadow-sm text-gray-700 p-4 rounded-2xl rounded-tl-sm text-base">
                    <p>Chủ đề: Giáo dục</p>
                    <p className="mt-2 font-medium">"University education should be free to everyone. To what extent do you agree or disagree?"</p>
                    <p className="mt-2 italic text-gray-500">Hãy viết bài luận 250 từ thể hiện quan điểm của bạn.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-100 p-4 rounded-xl">
                <h4 className="font-bold text-amber-700 text-base flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" /> Đánh giá Level 2 (Trung bình)
                </h4>
                <ul className="text-sm text-amber-900/80 space-y-1 list-disc list-inside">
                  <li><strong>Có cải tiến:</strong> Đã bổ sung chủ đề (Giáo dục).</li>
                  <li><strong>Hạn chế:</strong> Sự khác biệt còn nhỏ, giải thích đơn giản. Chưa phân loại được trình độ người học.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* LEVEL 3 */}
          {activeLevel === 3 && (
            <motion.div
              key="level3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2 items-end">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Câu lệnh (Nâng cao)</span>
                <div className="bg-blue-500 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm text-base">
                  "Đóng vai giám khảo IELTS. Tạo 1 đề thi Writing Task 2 chủ đề Giáo dục. Dành cho học viên đang ở band 6.0."
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-purple-500" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block">AI Phản hồi</span>
                  <div className="bg-white border border-gray-200 shadow-sm text-gray-700 p-4 rounded-2xl rounded-tl-sm text-base">
                    <p>Chào bạn, với tư cách là giám khảo, tôi gợi ý đề bài sau cho học viên band 6.0:</p>
                    <p className="mt-2 font-medium bg-gray-50 p-2 rounded">"Many students find it difficult to concentrate in modern classrooms. What are the causes of this and what solutions can you suggest?"</p>
                    <p className="mt-2 text-sm text-gray-600">Lời khuyên: Ở band 6.0, hãy tập trung vào việc phát triển ý tưởng rõ ràng và sử dụng câu phức đa dạng.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-xl">
                <h4 className="font-bold text-blue-700 text-base flex items-center gap-2 mb-2">
                  <ArrowUpRight className="w-4 h-4" /> Đánh giá Level 3 (Khá)
                </h4>
                <ul className="text-sm text-blue-900/80 space-y-1 list-disc list-inside">
                  <li><strong>Áp dụng hiệu quả:</strong> Đã dùng Role (Giám khảo) và Context (Band 6.0).</li>
                  <li><strong>Logic so sánh:</strong> AI đã thay đổi văn phong (chào hỏi như giám khảo, đưa lời khuyên phù hợp với band 6.0).</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* LEVEL 4 */}
          {activeLevel === 4 && (
            <motion.div
              key="level4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2 items-end">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Câu lệnh (Chuyên gia)</span>
                <div className="bg-green-500 text-white p-4 rounded-2xl rounded-tr-sm max-w-[95%] shadow-md text-base leading-relaxed">
                  <span className="bg-white/20 px-1 rounded font-bold mr-1">[Vai trò]</span> 
                  Đóng vai giám khảo IELTS. <br/>
                  <span className="bg-white/20 px-1 rounded font-bold mr-1 mt-2 inline-block">[Nhiệm vụ]</span> 
                  Tạo 1 đề thi Writing Task 2 chủ đề Giáo dục. <br/>
                  <span className="bg-white/20 px-1 rounded font-bold mr-1 mt-2 inline-block">[Bối cảnh]</span> 
                  Dành cho học viên đang ở band 6.0 muốn lên 7.0+. <br/>
                  <span className="bg-white/20 px-1 rounded font-bold mr-1 mt-2 inline-block">[Ràng buộc]</span> 
                  Cung cấp 3 từ vựng band 7+ liên quan và lập dàn ý chi tiết từng đoạn văn. Phản hồi bằng tiếng Việt.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1 mb-1 block">AI Phản hồi (Xuất sắc)</span>
                  <div className="bg-white border border-gray-200 text-gray-700 p-4 rounded-2xl rounded-tl-sm text-base shadow-sm space-y-3">
                    <p className="font-bold text-gray-900">📝 Đề bài (Chủ đề: Giáo dục đại học):</p>
                    <p className="italic bg-gray-50 p-2 rounded text-gray-800">"University education should be free to everyone... To what extent do you agree?"</p>
                    
                    <p className="font-bold text-purple-600 mt-2">✨ Từ vựng Band 7+ (Lexical Resource):</p>
                    <ul className="list-disc list-inside text-gray-600">
                      <li><strong>Financial burden</strong> (Gánh nặng tài chính)</li>
                      <li><strong>Socioeconomic background</strong> (Hoàn cảnh KT-XH)</li>
                    </ul>

                    <p className="font-bold text-gray-900 mt-2">📊 Dàn ý chi tiết (Band 7.0+):</p>
                    <p className="text-gray-600"><strong>Body 1:</strong> Lợi ích (Bình đẳng giáo dục)...<br/>
                    <strong>Body 2:</strong> Bất lợi và giải pháp (Tăng gánh nặng thuế)...</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-green-50 border border-green-100 p-4 rounded-xl">
                <h4 className="font-bold text-green-700 text-base flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Đánh giá Level 4 (Tuyệt Đối)
                </h4>
                <ul className="text-sm text-green-900/80 space-y-1.5 list-disc list-inside">
                  <li><strong>Áp dụng thành thạo:</strong> Sử dụng RTF & CREATE một cách hoàn hảo.</li>
                  <li><strong>Cơ chế hoạt động của AI:</strong> Khi có <code>[Vai trò]</code> và <code>[Bối cảnh]</code> cụ thể, mô hình xác suất của AI tự động lọc bỏ các từ vựng B1/B2 và chọn lọc đúng từ vựng C1.</li>
                  <li><strong>Kiểm soát ảo giác:</strong> <code>[Ràng buộc]</code> ép AI giới hạn chính xác lượng thông tin đầu ra, đáp ứng đúng yêu cầu của người học.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
