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
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Neural Machine Translation Quality",
      author: "Specia, L. (2022)",
      type: "Bài báo khoa học",
      pros: "Nghiên cứu định lượng, đo lường BLEU score",
      cons: "Nặng về kỹ thuật, ít tính văn hóa",
      color: "from-blue-500 to-indigo-500",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Standard for Translation Services",
      author: "ISO 17100:2015",
      type: "Tiêu chuẩn ngành",
      pros: "Luật chơi chung, tính ứng dụng thực tế cao",
      cons: "Khô khan, thiếu tính linh hoạt",
      color: "from-blue-500 to-indigo-500",
      bg: "bg-blue-50",
      border: "border-blue-100"
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

      <div className="space-y-4">
        {sources.map((source, idx) => (
          <div key={idx} className={`relative overflow-hidden border ${source.border} ${source.bg} rounded-xl p-4 transition-transform hover:-translate-y-1 hover:shadow-md group`}>
            {/* Top accent bar */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${source.color}`}></div>
            
            <div className="flex justify-between items-start mb-2 mt-1">
              <h3 className="font-bold text-gray-800 text-base">{source.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100">
                {source.type}
              </span>
            </div>
            
            <div className="text-sm text-gray-500 font-medium mb-3">Tác giả: {source.author}</div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/60 p-2 rounded border border-white/40">
                <div className="font-bold text-emerald-600 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ưu điểm
                </div>
                <div className="text-gray-600 leading-tight">{source.pros}</div>
              </div>
              <div className="bg-white/60 p-2 rounded border border-white/40">
                <div className="font-bold text-rose-600 mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> Nhược điểm
                </div>
                <div className="text-gray-600 leading-tight">{source.cons}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
