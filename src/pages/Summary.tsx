import ReflectionCard from "./summary/ReflectionCard";
import PageNav from "../components/PageNav";

export default function Summary() {
  return (
    <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12">
      <div className="mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0s', animationDuration: '0.8s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="text-left max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 text-sm font-bold rounded-full uppercase tracking-widest mb-4 shadow-sm border border-pink-200">
              Tổng kết Khóa học
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight flex flex-wrap gap-2">
              <span>Đánh giá bản thân &</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 whitespace-nowrap">
                Sự trưởng thành
              </span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Nhìn lại hành trình rèn luyện kỹ năng số và ứng dụng Trí tuệ nhân tạo của khóa học. 
              Phân tích sâu sắc sự trưởng thành và cách áp dụng các kỹ năng này vào học tập và công việc trong tương lai.
            </p>
          </div>
          <PageNav prev={{ path: "/week6", label: "Week 6" }} />
        </div>
      </div>

      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationDuration: '1s', animationFillMode: 'forwards' }}>
        <ReflectionCard />
      </div>
      
    </main>
  );
}
