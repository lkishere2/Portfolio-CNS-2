import { Monitor } from "lucide-react";

export default function BasicTasks() {
  const steps = [
    { title: "Mở File Explorer", desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ." },
    { title: "Truy cập ổ đĩa/thư mục", desc: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents." },
    { title: "Tạo thư mục mới", desc: "Nhấp chuột phải vào khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien. Nhấn Enter." },
    { title: "Vào thư mục vừa tạo", desc: "Nhấp đúp vào thư mục ThucHanh_hotensinhvien để mở." },
    { title: "Tạo tệp tin văn bản", desc: "Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter." },
    { title: "Đổi tên tệp tin", desc: "Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter." },
    { title: "Tạo thư mục con", desc: "Trong thư mục ThucHanh_hotensinhvien, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu." },
    { title: "Sao chép tệp tin (Copy & Paste)", desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy. Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải -> chọn Paste." },
    { title: "Di chuyển tệp tin (Cut & Paste)", desc: "Tạo tệp mới DiChuyen.txt ở thư mục gốc. Chọn Cut. Vào thư mục TaiLieu và chọn Paste." },
    { title: "Xóa tệp tin", desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt trong thư mục TaiLieu -> chọn Delete để chuyển vào Thùng rác." },
    { title: "Xóa vĩnh viễn", desc: "Chọn tệp DiChuyen.txt, nhấn giữ phím Shift + Delete. Tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác." },
    { title: "Khôi phục từ Thùng rác", desc: "Mở Recycle Bin trên màn hình nền. Tìm tệp GhiChuQuanTrong.txt, nhấp chuột phải và chọn Restore." }
  ];

  return (
    <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-pink-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 shadow-inner">
          <Monitor className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Thực hành hệ điều hành</h3>
          <p className="text-sm text-gray-500">Quy trình 12 bước thao tác cơ bản với Windows</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 p-3 hover:bg-pink-50/50 rounded-lg transition-colors border border-transparent hover:border-pink-100 group">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 font-bold flex items-center justify-center text-sm shadow-sm group-hover:scale-110 transition-transform">
              {idx + 1}
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-base mb-1">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
      

    </div>
  );
}
