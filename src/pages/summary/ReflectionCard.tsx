import { GraduationCap, Search, MessageSquare, Handshake, ShieldCheck, Mountain, Rocket } from "lucide-react";

export default function ReflectionCard() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-100 rounded-2xl p-8 lg:p-10 shadow-sm relative overflow-hidden group">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-4 pb-5 border-b border-gray-50 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            <GraduationCap className="w-8 h-8" />
          </div>
          Hành trình phát triển kỹ năng số
        </h3>
        <p className="text-base text-gray-600 leading-relaxed mb-8 relative z-10">
          Qua khóa học Kỹ năng số ứng dụng AI, em đã có cái nhìn sâu sắc và toàn diện về cách thức trí tuệ nhân tạo đang định hình lại cách chúng ta làm việc, học tập và sáng tạo. Các kỹ năng quan trọng nhất bao gồm:
        </p>
        <div className="grid sm:grid-cols-2 gap-5 relative z-10">
          {/* Skill 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3 text-lg">
              <span className="p-2 bg-blue-50 text-blue-500 rounded-lg group-hover/item:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </span>
              Kỹ năng Nghiên cứu
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">Sử dụng toán tử tìm kiếm nâng cao để định vị nguồn học thuật đáng tin cậy nhanh chóng và chính xác.</p>
          </div>
          {/* Skill 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3 text-lg">
              <span className="p-2 bg-purple-50 text-purple-500 rounded-lg group-hover/item:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </span>
              Prompt Engineering
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">Làm chủ nghệ thuật giao tiếp với AI thông qua các framework như CREATE, thiết lập ngữ cảnh và vai trò.</p>
          </div>
          {/* Skill 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3 text-lg">
              <span className="p-2 bg-emerald-50 text-emerald-500 rounded-lg group-hover/item:scale-110 transition-transform">
                <Handshake className="w-5 h-5" />
              </span>
              Hợp tác & Quản lý
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">Biết cách tích hợp công cụ số (Notion, Trello) để quản lý dự án nhóm hiệu quả trong môi trường làm việc từ xa.</p>
          </div>
          {/* Skill 4 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group/item">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-3 text-lg">
              <span className="p-2 bg-rose-50 text-rose-500 rounded-lg group-hover/item:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </span>
              Đạo đức AI
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">Xây dựng ý thức về sự minh bạch, bản quyền và tác động xã hội khi ứng dụng các công cụ Generative AI.</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
          <h4 className="font-bold text-gray-800 mb-5 flex items-center gap-3 text-xl border-b border-gray-50 pb-3">
            <div className="p-2.5 bg-orange-50 text-orange-500 rounded-xl group-hover:scale-110 transition-transform shadow-inner">
              <Mountain className="w-6 h-6" />
            </div>
            Thách thức & Bài học
          </h4>
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Ban đầu, việc viết prompt thường quá chung chung, dẫn đến kết quả trả về từ AI không đúng ý. Thách thức lớn nhất là học cách cụ thể hóa ý tưởng và kiểm chứng (fact-check) thông tin do AI sinh ra (hallucinations).
          </p>
          <div className="text-sm font-semibold text-rose-700 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-100 p-4 rounded-xl shadow-sm italic relative">
            <span className="absolute -top-3 -left-2 text-4xl text-rose-200 opacity-50 font-serif">"</span>
            Bài học: AI là một người trợ lý xuất sắc, nhưng không phải là người ra quyết định cuối cùng.
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
          <h4 className="font-bold text-gray-800 mb-5 flex items-center gap-3 text-xl border-b border-gray-50 pb-3">
            <div className="p-2.5 bg-sky-50 text-sky-500 rounded-xl group-hover:scale-110 transition-transform shadow-inner">
              <Rocket className="w-6 h-6" />
            </div>
            Định hướng tương lai
          </h4>
          <p className="text-base text-gray-600 leading-relaxed">
            Trong tương lai, em dự định tích hợp AI vào quy trình làm việc hằng ngày của bản thân một cách sâu rộng hơn, đặc biệt trong việc tự động hóa các tác vụ lặp đi lặp lại và hỗ trợ phân tích dữ liệu.
            <br/><br/>
            Đồng thời, em sẽ luôn tuân thủ nguyên tắc sử dụng AI có trách nhiệm, giữ vững tư duy phản biện.
          </p>
        </div>
      </div>
    </div>
  );
}
