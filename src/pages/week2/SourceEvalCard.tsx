// Decorative source evaluation card for Week2
interface Source {
  title: string;
  author: string;
  year: number;
  type: string;
  relevance: number;   // 1-5
  credibility: number; // 1-5
}

const sources: Source[] = [
  { title: "The Study of Second Language Acquisition", author: "Rod Ellis", year: 2015, type: "Sách học thuật", relevance: 5, credibility: 5 },
  { title: "Pragmatics and Language Learning", author: "K. Rose & G. Kasper", year: 2019, type: "Bài báo peer-reviewed", relevance: 4, credibility: 5 },
  { title: "Translation Studies", author: "Susan Bassnett", year: 2014, type: "Giáo trình đại học", relevance: 4, credibility: 4 },
];

function Stars({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`text-xs ${i < value ? "text-pink-400" : "text-gray-200"}`}>★</span>
      ))}
    </div>
  );
}

export default function SourceEvalCard() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-pink-400 font-medium uppercase tracking-widest mb-1">
        📋 Đánh giá nguồn tài liệu
      </p>
      {sources.map((s) => (
        <div
          key={s.title}
          className="bg-white border border-pink-100 rounded-xl p-4 hover:border-pink-200 hover:shadow-sm transition-all"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-700 truncate">{s.title}</p>
              <p className="text-xs text-gray-400">{s.author} · {s.year}</p>
            </div>
            <span className="shrink-0 text-xs px-2 py-0.5 bg-pink-50 border border-pink-200 text-pink-500 rounded-full">
              {s.type}
            </span>
          </div>
          <div className="flex gap-6 mt-2">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Độ liên quan</p>
              <Stars value={s.relevance} />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Độ tin cậy</p>
              <Stars value={s.credibility} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}