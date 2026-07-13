import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, BookOpen, FileText, Globe } from "lucide-react";

interface Source {
  title: string;
  author: string;
  year: number;
  type: "book" | "article" | "web";
  relevance: number;
  credibility: number;
  status: "high" | "medium" | "low";
  note: string;
}

const sources: Source[] = [
  { 
    title: "The Study of Second Language Acquisition", 
    author: "Rod Ellis", 
    year: 2015, 
    type: "book", 
    relevance: 5, 
    credibility: 5,
    status: "high",
    note: "Tác giả uy tín, NXB ĐH Oxford."
  },
  { 
    title: "Pragmatics and Language Learning", 
    author: "K. Rose & G. Kasper", 
    year: 2019, 
    type: "article", 
    relevance: 4, 
    credibility: 5,
    status: "high",
    note: "Bài báo Peer-reviewed trên tạp chí Q1."
  },
  { 
    title: "Translation Studies Overview", 
    author: "Unknown Blogger", 
    year: 2023, 
    type: "web", 
    relevance: 3, 
    credibility: 2,
    status: "low",
    note: "Thiếu nguồn trích dẫn, góc nhìn chủ quan."
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-[10px] sm:text-xs ${i <= value ? "text-amber-400" : "text-gray-200"}`}>★</span>
      ))}
    </div>
  );
}

export default function SourceEvalCard() {
  const getIcon = (type: string) => {
    switch(type) {
      case 'book': return <BookOpen className="w-4 h-4 text-yellow-500" />;
      case 'article': return <FileText className="w-4 h-4 text-yellow-500" />;
      default: return <Globe className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> 
        Đánh giá độ tin cậy (CRAAP Test)
      </h3>
      
      <div className="flex flex-col gap-3">
        {sources.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + idx * 0.15, duration: 0.5 }}
            className="bg-blue-50 border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group relative overflow-hidden"
          >
            {/* Status indicator line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
              s.status === 'high' ? 'bg-emerald-400' : s.status === 'medium' ? 'bg-amber-400' : 'bg-rose-400'
            }`} />

            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {getIcon(s.type)}
                  <h4 className="text-sm sm:text-base font-bold text-gray-800 truncate" title={s.title}>
                    {s.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-500 font-medium ml-6">
                  {s.author} • {s.year}
                </p>
              </div>
              
              <div className="shrink-0 flex items-center justify-center p-1.5 rounded-lg bg-white border border-blue-100">
                {s.status === 'high' ? (
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                ) : (
                  <ShieldAlert className="w-5 h-5 text-rose-500" />
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 ml-6">
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <p className="text-[10px] text-gray-400 uppercase font-semibold mb-1">Mức độ phù hợp</p>
                <Stars value={s.relevance} />
              </div>
              <div className="bg-white rounded-lg p-2 border border-blue-100">
                <p className="text-[10px] text-gray-400 uppercase font-semibold mb-1">Độ tin cậy</p>
                <Stars value={s.credibility} />
              </div>
            </div>

            <div className="mt-3 ml-6">
              <p className="text-xs text-gray-600 bg-white p-2 rounded-lg border border-blue-100">
                <span className="font-semibold text-blue-700">Nhận xét: </span> 
                {s.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}