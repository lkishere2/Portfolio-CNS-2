import ProjectItem, { type ProjectData } from "./ProjectItem";

const projects: ProjectData[] = [
  {
    week: 1,
    path: "/week1",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    subject: "Bài tập 1 - Mục 1.1",
    description:
      "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập, kèm ảnh chụp minh họa.",
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
    subject: "Bài tập 2 - Mục 2.2",
    description:
      "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin đã thực hiện.",
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
    subject: "Bài tập 2 - Mục 3.2",
    description:
      "Trình bày sự so sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.",
    tags: ["Prompt Engineering", "ChatGPT", "Claude"],
    color: "from-fuchsia-400 to-pink-400",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    badge: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    week: 4,
    path: "/week4",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    subject: "Bài tập 3 - Mục 4.3",
    description:
      "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách thức phối hợp trực tuyến.",
    tags: ["Trello", "Google Docs", "Messenger"],
    color: "from-pink-500 to-fuchsia-400",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
  },
  {
    week: 5,
    path: "/week5",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    subject: "Bài tập 2 - Mục 5.2",
    description:
      "Trưng bày sản phẩm nội dung số hoàn thiện (hình ảnh, video hoặc bài viết) được hỗ trợ bởi AI.",
    tags: ["Gemini", "Dreamina", "Canva AI"],
    color: "from-rose-300 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "bg-rose-100 text-rose-600",
  },
  {
    week: 6,
    path: "/week6",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    subject: "Bài tập 4 - Mục 6.4",
    description:
      "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu đã thực hiện.",
    tags: ["AI Ethics", "Chính sách ULIS", "Liêm chính học thuật"],
    color: "from-pink-400 to-rose-300",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-600",
  },
  {
    week: "★",
    path: "/summary",
    title: "Tổng kết khóa học",
    subject: "Hành trình nhìn lại",
    description:
      "Nhìn lại chặng đường 6 tuần với những bài học cốt lõi, kỹ năng thực chiến đã thu nhận được và định hướng ứng dụng trong tương lai.",
    tags: ["Tổng kết", "Phản ngẫm", "Định hướng"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "bg-pink-100 text-pink-700",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-pink-400 uppercase tracking-widest mb-2">
            Hành trình · 6 Kỹ năng số
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            Hệ thống hóa và trình bày kết quả bài tập
          </h2>
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