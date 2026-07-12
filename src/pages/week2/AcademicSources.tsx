import { GraduationCap, FileText, BarChart } from "lucide-react";

export default function AcademicSources() {
  return (
    <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-pink-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shadow-inner">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Khai thác Nguồn Học thuật</h3>
          <p className="text-sm text-gray-500">Tìm kiếm tài liệu có giá trị nghiên cứu cao</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 space-y-4">
          <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-100">
            <h4 className="font-bold text-gray-800 text-base mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-orange-500" />
              Google Scholar
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Phiên bản tìm kiếm của Google dành riêng cho các bài báo khoa học, luận văn, sách và báo cáo kỹ thuật. Khác với Google thường, kết quả ở đây đã qua bình duyệt (Peer-review).
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h4 className="font-bold text-gray-800 text-base mb-3">Chỉ số quan trọng cần lưu ý:</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:border-orange-200 transition-colors shadow-sm">
              <div className="p-1.5 bg-rose-50 text-rose-600 rounded">
                <BarChart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-800">Trích dẫn (Cited by)</p>
                <p className="text-sm text-gray-500 mt-0.5">Số lần tài liệu này được các nhà khoa học khác trích dẫn. Số càng cao chứng tỏ tài liệu càng uy tín và có tầm ảnh hưởng lớn.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:border-orange-200 transition-colors shadow-sm">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-base font-bold text-gray-800">Related articles</p>
                <p className="text-sm text-gray-500 mt-0.5">Giúp bạn mở rộng vốn tài liệu bằng cách gợi ý các bài báo có cùng chủ đề hoặc phương pháp nghiên cứu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
