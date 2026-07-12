import { Target, Zap, Briefcase, Lightbulb, Puzzle, BookOpen, Search } from "lucide-react";

export default function PromptKnowledge() {
  const strategies = [
    {
      title: "Zero-shot Prompting",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      desc: "Yêu cầu AI thực hiện tác vụ trực tiếp mà không cần cung cấp bất kỳ ví dụ mẫu nào.",
      example: "VD: 'Dịch câu này sang tiếng Anh: Xin chào.'",
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      title: "Few-shot Prompting",
      icon: <Puzzle className="w-5 h-5 text-blue-500" />,
      desc: "Cung cấp từ 2 đến 3 ví dụ (input-output) để AI học cách định hình cấu trúc và văn phong.",
      example: "VD: Đưa ra 2 ví dụ phân tích sắc thái cảm xúc trước khi yêu cầu AI phân tích câu thứ 3.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Chain-of-Thought (CoT)",
      icon: <Lightbulb className="w-5 h-5 text-purple-500" />,
      desc: "Kích thích khả năng suy luận logic bằng cách yêu cầu AI giải thích từng bước trước khi chốt kết quả.",
      example: "VD: 'Hãy suy nghĩ từng bước một và giải bài toán sau...'",
      color: "bg-purple-50 border-purple-100"
    },
    {
      title: "Role-playing (Nhập vai)",
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      desc: "Gắn cho AI một định danh chuyên môn để nó điều chỉnh từ vựng và thái độ phù hợp với ngữ cảnh.",
      example: "VD: 'Hãy đóng vai một giám khảo IELTS với 10 năm kinh nghiệm...'",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      title: "Framework CREATE",
      icon: <Target className="w-5 h-5 text-pink-500" />,
      desc: "Công thức toàn diện: Context (Bối cảnh) - Request (Yêu cầu) - Explanation (Giải thích) - Action (Hành động) - Tone (Giọng điệu) - Extras (Ràng buộc).",
      example: "Giúp bao quát toàn bộ ngữ cảnh, không để AI phải tự đoán ý.",
      color: "bg-pink-50 border-pink-100"
    },
    {
      title: "Công thức RTF",
      icon: <BookOpen className="w-5 h-5 text-emerald-500" />,
      desc: "Công thức ngắn gọn, hiệu quả cao: Role (Vai trò) - Task (Nhiệm vụ) - Format (Định dạng).",
      example: "VD: 'Đóng vai chuyên gia dinh dưỡng (R), viết thực đơn (T), dưới dạng bảng (F).'",
      color: "bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-pink-600 shadow-inner">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Kiến thức Prompt Engineering</h2>
            <p className="text-sm text-gray-500 mt-1">Các chiến thuật cốt lõi để tối ưu hóa đầu ra của AI</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategies.map((fw, idx) => (
          <div 
            key={idx} 
            className={`rounded-2xl p-6 border ${fw.color} hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
          >
            {/* Background decoration */}
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              {fw.icon}
            </div>

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {fw.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-base">{fw.title}</h3>
            </div>
            
            <p className="text-base text-gray-700 leading-relaxed mb-4 relative z-10">
              {fw.desc}
            </p>
            
            <div className="bg-white/60 p-3 rounded-lg border border-white/40 text-sm text-gray-600 italic relative z-10">
              {fw.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
