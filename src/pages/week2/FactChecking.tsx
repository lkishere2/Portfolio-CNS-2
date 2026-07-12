import { ShieldCheck, BookOpenCheck, EyeOff } from "lucide-react";

export default function FactChecking() {
  return (
    <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-pink-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shadow-inner">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Đánh giá & Kiểm chứng Thông tin</h3>
          <p className="text-sm text-gray-500">Kỹ năng sinh tồn trong thời đại ngập tràn tin giả (Fake News)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* CRAAP Test */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-5 rounded-xl border border-teal-100">
          <div className="flex items-center gap-2 mb-3">
            <BookOpenCheck className="w-5 h-5 text-teal-600" />
            <h4 className="font-bold text-gray-800 text-base">Tiêu chuẩn CRAAP</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">Bộ 5 tiêu chí vàng để đánh giá một tài liệu học thuật:</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong className="text-teal-700">C</strong>urrency (Tính cập nhật): Thông tin có mới không?</li>
            <li><strong className="text-teal-700">R</strong>elevance (Tính liên quan): Có đúng chủ đề bạn cần?</li>
            <li><strong className="text-teal-700">A</strong>uthority (Thẩm quyền): Tác giả là ai? Bằng cấp gì?</li>
            <li><strong className="text-teal-700">A</strong>ccuracy (Độ chính xác): Có minh chứng, trích dẫn rõ ràng?</li>
            <li><strong className="text-teal-700">P</strong>urpose (Mục đích): Viết để cung cấp thông tin hay quảng cáo?</li>
          </ul>
        </div>

        {/* Lateral Reading */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-100">
          <div className="flex items-center gap-2 mb-3">
            <EyeOff className="w-5 h-5 text-indigo-600" />
            <h4 className="font-bold text-gray-800 text-base">Đọc ngang (Lateral Reading)</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            Thay vì chỉ chăm chăm đọc từ trên xuống dưới (đọc dọc) trên một trang web để xem nó có đáng tin hay không, hãy:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 list-disc pl-4">
            <li>Mở các tab mới trên trình duyệt.</li>
            <li>Tìm kiếm xem các trang web uy tín khác nói gì về trang web/tác giả đó.</li>
            <li>Sử dụng các trang fact-check chuyên nghiệp (Snopes, Reuters Fact Check) hoặc Wikipedia để đối chiếu thông tin.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
