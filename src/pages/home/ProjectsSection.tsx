import ProjectItem, { type ProjectData } from "./ProjectItem";

const projects: ProjectData[] = [
  {
    week: 1,
    path: "/week1",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    subject: "Bài tập 1 · Mục 1.4",
    description:
      "Thực hành tạo, đổi tên, sao chép, di chuyển và xóa tệp tin/thư mục trên Windows. Xây dựng cấu trúc thư mục tối ưu và quy tắc đặt tên nhất quán.",
    tags: ["File Explorer", "Windows", "Tổ chức tệp"],
    color: "from-pink-400 to-rose-400",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
  },
  {
    week: 2,
    path: "/week2",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    subject: "Bài tập 2 · Mục 2.4",
    description:
      "Ứng dụng các toán tử tìm kiếm nâng cao (site:, filetype:, AND/NOT) trên Google Scholar. Đánh giá độ tin cậy của nguồn học thuật.",
    tags: ["Google Scholar", "Toán tử tìm kiếm", "Đánh giá nguồn"],
    color: "from-rose-400 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-600",
  },
  {
    week: 3,
    path: "/week3",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    subject: "Bài tập 2 · Mục 3.4",
    description:
      "So sánh Prompt cơ bản và Prompt cải tiến trên 3 tác vụ học thuật. Phân tích kỹ thuật Role-prompting, Chain-of-Thought và Few-shot learning.",
    tags: ["Prompt Engineering", "ChatGPT", "Claude"],
    color: "from-fuchsia-400 to-pink-400",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    badge: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    week: 4,
    path: "/week4",
    title: "Sử dụng công cụ hợp tác trực tuyến",
    subject: "Bài tập 3 · Mục 4.4",
    description:
      "Trình bày minh chứng sử dụng Trello, Google Docs, Google Drive và Messenger trong dự án nhóm về an toàn giao thông.",
    tags: ["Trello", "Google Docs", "Messenger"],
    color: "from-pink-500 to-fuchsia-400",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
  },
  {
    week: 5,
    path: "/week5",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung số",
    subject: "Bài tập 2 · Mục 5.4",
    description:
      "Sáng tạo E-Magazine và Infographic về sự tiến hóa của tiếng lóng tiếng Anh, sử dụng Gemini, Dreamina AI và Canva Magic Studio.",
    tags: ["Gemini", "Dreamina", "Canva AI"],
    color: "from-rose-300 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-600",
  },
  {
    week: 6,
    path: "/week6",
    title: "Sử dụng AI có trách nhiệm trong học thuật",
    subject: "Bài tập 4 · Mục 6.4",
    description:
      "Nghiên cứu chính sách AI của ULIS-VNU, phân tích đạo đức và xây dựng bộ 7 nguyên tắc cá nhân về sử dụng AI có trách nhiệm.",
    tags: ["AI Ethics", "Chính sách ULIS", "Liêm chính học thuật"],
    color: "from-pink-400 to-rose-300",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-pink-400 uppercase tracking-widest mb-2">
            Các bài tập thành phần
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Hành trình · 6 Kỹ năng số
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            Khám phá hành trình thực hành và phát triển kỹ năng qua từng tuần.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {projects.map((p, index) => (
            <ProjectItem 
              key={p.week} 
              project={p} 
              isLast={index === projects.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}