export default function PromptCompare() {
  return (
    <div className="bg-white border border-pink-100 rounded-lg p-6 shadow-sm h-full">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 pb-3 border-b border-pink-50">
        <span>✨</span> Phân tích & So sánh Prompt
      </h3>

      <div className="space-y-6">
        {/* Basic Prompt */}
        <div className="bg-gray-50 rounded p-5 border border-gray-200 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gray-300"></div>
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wide">
              Prompt Cơ bản (Phiên bản 1)
            </h4>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded font-medium">Kém</span>
          </div>
          <p className="text-gray-700 font-mono text-sm mb-4">
            "Viết một bài báo về trí tuệ nhân tạo."
          </p>
          <div className="bg-white rounded p-4 text-sm text-gray-600 shadow-sm">
            <span className="font-semibold text-gray-800 block mb-1">Kết quả:</span>
            Một đoạn văn bản khô khan, chung chung, bao quát quá nhiều khía cạnh của AI mà không có trọng tâm, giọng văn hoặc đối tượng mục tiêu rõ ràng. Thiếu chiều sâu và không thu hút.
          </div>
        </div>

        {/* Improved Prompt */}
        <div className="bg-pink-50/50 rounded p-5 border border-pink-100 relative overflow-hidden shadow-inner">
          <div className="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-sm font-bold text-pink-700 uppercase tracking-wide">
              Prompt Nâng cao (Phiên bản 2)
            </h4>
            <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded font-medium">Xuất sắc</span>
          </div>
          <div className="text-pink-900 font-mono text-sm mb-4 bg-white p-3 rounded border border-pink-100">
            <p><span className="text-rose-500 font-bold">[Vai trò]</span> Hãy đóng vai một nhà báo công nghệ kỳ cựu.</p>
            <p><span className="text-rose-500 font-bold">[Nhiệm vụ]</span> Viết một bài báo 500 chữ hấp dẫn về tác động của Generative AI đối với ngành giáo dục.</p>
            <p><span className="text-rose-500 font-bold">[Ngữ cảnh]</span> Đối tượng độc giả là các giáo viên trung học đang hoài nghi nhưng cũng tò mò về việc sử dụng AI trong lớp học.</p>
            <p><span className="text-rose-500 font-bold">[Định dạng]</span> Sử dụng giọng điệu khích lệ, đưa ra 3 ví dụ thực tế và định dạng với các tiêu đề markdown rõ ràng.</p>
          </div>
          <div className="bg-white rounded p-4 text-sm text-gray-700 border border-pink-50 shadow-sm">
            <span className="font-semibold text-pink-700 block mb-1">Phân tích kết quả:</span>
            Nội dung mang tính định hướng cao. AI hiểu rõ các ràng buộc, áp dụng giọng điệu đồng cảm với giáo viên và cung cấp các ví dụ mang tính thực tiễn. Bằng cách áp dụng framework <b>CREATE</b> (Context, Request, Explanation, Action, Tone, Extras), chất lượng đầu ra được cải thiện theo cấp số nhân.
          </div>
        </div>
      </div>
    </div>
  );
}
