import { Keyboard, Command, Copy, Maximize2, Search, MonitorUp } from "lucide-react";

export default function ShortcutKeys() {
  const shortcuts = [
    { keys: ["Win", "E"], desc: "Mở File Explorer nhanh", icon: <Search className="w-4 h-4" /> },
    { keys: ["Win", "D"], desc: "Thu nhỏ/Hiện toàn bộ cửa sổ (Desktop)", icon: <MonitorUp className="w-4 h-4" /> },
    { keys: ["Win", "V"], desc: "Mở lịch sử Clipboard (Lưu nhiều copy)", icon: <Copy className="w-4 h-4" /> },
    { keys: ["Win", "Shift", "S"], desc: "Công cụ chụp màn hình (Snipping Tool)", icon: <Maximize2 className="w-4 h-4" /> },
    { keys: ["Alt", "Tab"], desc: "Chuyển đổi nhanh giữa các ứng dụng", icon: <Command className="w-4 h-4" /> },
    { keys: ["Ctrl", "Shift", "Esc"], desc: "Mở Task Manager (Quản lý tác vụ)", icon: <Keyboard className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-pink-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600 shadow-inner">
          <Keyboard className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Phím tắt "Chuyên gia"</h3>
          <p className="text-sm text-gray-500">Tối ưu hóa hiệu suất làm việc trên Windows</p>
        </div>
      </div>

      <div className="space-y-4">
        {shortcuts.map((shortcut, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-orange-200 transition-colors group">
            <div className="flex flex-wrap gap-1.5 items-center">
              {shortcut.keys.map((key, i) => (
                <span key={i} className="flex items-center gap-1 bg-white border border-gray-200 text-gray-700 font-bold text-sm px-2.5 py-1.5 rounded-md shadow-sm border-b-2 group-hover:border-orange-300 transition-colors">
                  {key}
                </span>
              ))}
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-400 mt-0.5">{shortcut.icon}</span>
              <p className="text-base font-medium text-gray-700">{shortcut.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
