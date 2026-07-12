export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-pink-50 to-white border-t border-pink-100 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Name & tagline */}
          <div className="text-center md:text-left">
            <p className="font-bold text-pink-700 text-lg">Phạm Thị Mai</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">
              Ngôn ngữ và văn hóa Anh · ULIS, VNU · 2026
            </p>
          </div>

          {/* Divider dots */}
          <div className="hidden md:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-200" />
            <span className="w-1.5 h-1.5 rounded-full bg-pink-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-pink-200" />
          </div>

          {/* Course info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              Nhập môn Công nghệ số & Trí tuệ nhân tạo
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              Portfolio · MSSV 25040859
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© 2026 Phạm Thị Mai · Digital Portfolio</p>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-pink-300 inline-block" />
            <span>Built with React + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}