import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-pink-100 bg-gradient-to-t from-pink-50/60 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left section: Identity */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-pink-700 text-xl tracking-tight">
              Phạm Thị Mai
            </h3>
            <p className="text-gray-600 font-medium text-sm">
              Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (ULIS, VNU)
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <span className="text-gray-600 text-sm">
                <strong className="text-pink-800">MSSV:</strong> 25040859
              </span>
              <span className="text-pink-200">|</span>
              <span className="text-gray-600 text-sm">
                <strong className="text-pink-800">Ngành:</strong> Ngôn ngữ và văn hóa Anh
              </span>
              <span className="text-pink-200">|</span>
              <span className="text-gray-600 text-sm">
                <strong className="text-pink-800">Khóa:</strong> 2026
              </span>
            </div>
          </div>

          {/* Right section: Course info */}
          <div className="md:text-right space-y-2">
            <div className="flex items-center md:justify-end gap-2 text-pink-700 mb-2">
              <BookOpen className="w-5 h-5 text-pink-500" />
              <h4 className="font-bold text-base">Hồ sơ Học tập Điện tử (E-Portfolio)</h4>
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Môn học: Nhập môn Công nghệ số & Trí tuệ nhân tạo
            </p>
            <p className="text-gray-500 text-sm italic">
              Lưu trữ và phản ánh quá trình rèn luyện kỹ năng số.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© {new Date().getFullYear()} Phạm Thị Mai. Bản quyền thuộc về tác giả.</p>
          <div className="flex items-center gap-2">
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Dự án học thuật cuối kỳ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}