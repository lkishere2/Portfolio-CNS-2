import { Scale, CheckSquare, ShieldCheck } from "lucide-react";

export default function AIEthicsAndEval() {
  const checklist = [
    { label: "Tính chính xác (Accuracy)", desc: "Luôn kiểm chứng chéo thông tin, dữ liệu do AI cung cấp." },
    { label: "Dấu ấn cá nhân (Originality)", desc: "Thêm góc nhìn và trải nghiệm thực tế để không bị rập khuôn." },
    { label: "Kiểm soát Thiên kiến (Bias)", desc: "Rà soát và loại bỏ các định kiến (về giới, văn hóa) trong kết quả AI." },
    { label: "Tính mạch lạc (Logic)", desc: "Sắp xếp lại luận điểm sao cho luồng thông tin tự nhiên và dễ hiểu nhất." },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Copyright */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-base font-bold text-amber-800 flex items-center gap-2 mb-4 border-b border-amber-200/50 pb-3">
          <Scale className="w-5 h-5" /> Bản quyền & Liêm chính
        </h3>
        <ul className="space-y-4 text-sm text-amber-900/80 leading-relaxed">
          <li className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2"></span>
            <span><strong className="text-amber-900">Đạo văn (Plagiarism):</strong> Tuyệt đối không copy nguyên văn nội dung AI làm của mình.</span>
          </li>
          <li className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2"></span>
            <span><strong className="text-amber-900">Giấy phép Mở (CC):</strong> Ưu tiên sử dụng hình ảnh từ Pexels, Unsplash, hoặc nhạc Royalty-free.</span>
          </li>
          <li className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2"></span>
            <span><strong className="text-amber-900">Minh bạch:</strong> Ghi chú rõ ràng mức độ sử dụng AI (vd: "Kịch bản được hỗ trợ lên ý tưởng bởi ChatGPT").</span>
          </li>
        </ul>
      </div>

      {/* Evaluation Checklist */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-base font-bold text-emerald-800 flex items-center gap-2 mb-4 border-b border-emerald-200/50 pb-3">
          <CheckSquare className="w-5 h-5" /> Tiêu chí Đánh giá AI
        </h3>
        <div className="space-y-3.5">
          {checklist.map((item, i) => (
            <div key={i} className="flex gap-2.5 items-start bg-white/50 p-2.5 rounded-xl border border-emerald-100/50">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-900/80 leading-relaxed">
                <strong className="text-emerald-900 block mb-0.5">{item.label}</strong> 
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
