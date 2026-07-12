import { Search, Database, Globe, Filter } from "lucide-react";

export default function SearchingKnowledge() {
  const techniques = [
    {
      title: 'Toán tử Ngoặc kép (" ")',
      icon: <Search className="w-5 h-5 text-blue-500" />,
      desc: 'Buộc máy tìm kiếm phải tìm chính xác cụm từ bên trong ngoặc.',
      example: 'VD: "Phương pháp dịch thuật giao tiếp"',
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Toán tử Loại trừ (-)",
      icon: <Filter className="w-5 h-5 text-rose-500" />,
      desc: "Loại bỏ các kết quả chứa từ khóa không mong muốn.",
      example: "VD: apple -mac -iphone (Tìm quả táo, không tìm đồ công nghệ)",
      color: "bg-rose-50 border-rose-100"
    },
    {
      title: "Toán tử Tên miền (site:)",
      icon: <Globe className="w-5 h-5 text-emerald-500" />,
      desc: "Chỉ tìm kiếm thông tin bên trong một trang web hoặc loại tên miền cụ thể.",
      example: "VD: global warming site:.edu (Chỉ tìm trên các trang giáo dục)",
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      title: "Toán tử Định dạng (filetype:)",
      icon: <Database className="w-5 h-5 text-purple-500" />,
      desc: "Trích xuất trực tiếp các tài liệu theo đuôi file (pdf, docx, pptx, xlsx).",
      example: "VD: AI in healthcare filetype:pdf",
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
          <Search className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Toán tử tìm kiếm nâng cao</h2>
          <p className="text-sm text-gray-500 mt-1">Làm chủ công cụ tìm kiếm với các cú pháp đặc biệt</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {techniques.map((tech, idx) => (
          <div 
            key={idx} 
            className={`rounded-xl p-5 border ${tech.color} hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
          >
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
              {tech.icon}
            </div>

            <div className="flex items-center gap-3 mb-3 relative z-10">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                {tech.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-base">{tech.title}</h3>
            </div>
            
            <p className="text-sm text-gray-700 leading-relaxed mb-3 relative z-10">
              {tech.desc}
            </p>
            
            <div className="bg-white/60 p-2.5 rounded-lg border border-white/40 text-sm font-mono text-gray-600 relative z-10">
              {tech.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
