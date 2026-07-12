import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface PageNavProps {
  prev?: { path: string; label: string };
  next?: { path: string; label: string };
}

export default function PageNav({ prev, next }: PageNavProps) {
  return (
    <div className="flex items-center gap-3 mt-4 sm:mt-0 shrink-0">
      {prev && (
        <Link 
          to={prev.path} 
          className="group flex items-center gap-2 px-4 py-2 bg-white border border-pink-200 rounded-full shadow-sm hover:shadow-md hover:border-pink-400 transition-all text-pink-600 text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          <span className="hidden sm:inline">{prev.label}</span>
          <span className="sm:hidden">Trở lại</span>
        </Link>
      )}
      {next && (
        <Link 
          to={next.path} 
          className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-md hover:shadow-lg hover:shadow-pink-200/50 transition-all text-sm font-bold hover:-translate-y-0.5"
        >
          <span className="hidden sm:inline">{next.label}</span>
          <span className="sm:hidden">Tiếp theo</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
