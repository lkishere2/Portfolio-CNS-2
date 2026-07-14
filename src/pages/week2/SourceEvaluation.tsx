import { Scale, CheckCircle2, AlertTriangle } from "lucide-react";

export default function SourceEvaluation() {
  const sources = [
    {
      title: "Introducing Translation Studies",
      author: "Munday, J. (2016)",
      type: "Sách chuyên khảo",
      pros: "Khung lý thuyết hệ thống, >10.000 trích dẫn",
      cons: "Chưa cập nhật ví dụ AI mới nhất",
      color: "from-blue-500 to-indigo-500",
      bg: "bg-white",
      border: "border-gray-200"
    },
    {
      title: "Neural Machine Translation Quality",
      author: "Specia, L. (2022)",
      type: "Bài báo khoa học",
      pros: "Nghiên cứu định lượng, đo lường BLEU score",
      cons: "Nặng về kỹ thuật, ít tính văn hóa",
      color: "from-blue-500 to-indigo-500",
      bg: "bg-white",
      border: "border-gray-200"
    },
    {
      title: "Standard for Translation Services",
      author: "ISO 17100:2015",
      type: "Tiêu chuẩn ngành",
      pros: "Luật chơi chung, tính ứng dụng thực tế cao",
      cons: "Khô khan, thiếu tính linh hoạt",
      color: "from-blue-500 to-indigo-500",
      bg: "bg-white",
      border: "border-gray-200"
    }
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-500 shadow-inner">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-800">Đánh giá Nguồn</h2>
          <p className="text-sm text-gray-500">Phân tích 3 tài liệu tiêu biểu</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sources.map((source, idx) => (
          <div key={idx} className={`relative overflow-hidden border ${source.border} ${source.bg} rounded-xl p-5 transition-transform hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between h-full`}>
            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${source.color}`}></div>
            
            <div className="flex-1 flex flex-col mb-4">
              <div className="mb-2 mt-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50/50 px-2 py-0.5 rounded border border-pink-100">
                  {source.type}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-800 text-base leading-snug mb-1 group-hover:text-pink-600 transition-colors">
                {source.title}
              </h3>
              
              <div className="text-xs text-gray-400 font-medium">Tác giả: {source.author}</div>
            </div>
            
            <div className="space-y-2.5 text-xs">
              <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                <div className="font-bold text-emerald-600 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ưu điểm
                </div>
                <div className="text-gray-600 leading-normal">{source.pros}</div>
              </div>
              <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                <div className="font-bold text-rose-600 mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Nhược điểm
                </div>
                <div className="text-gray-600 leading-normal">{source.cons}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
