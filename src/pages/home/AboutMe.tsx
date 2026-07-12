import { motion } from "framer-motion";
import { FolderTree, Search, MessageSquare, Users, Palette, Bot, Target, FolderOpen } from "lucide-react";
import ObjectiveCard from "../../components/ObjectiveCard";

export default function AboutMe() {
  const tags = [
    { icon: <FolderTree className="w-4 h-4" />, label: "Quản lý tệp tin" },
    { icon: <Search className="w-4 h-4" />, label: "Tìm kiếm học thuật" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "Prompt Engineering" },
    { icon: <Users className="w-4 h-4" />, label: "Hợp tác trực tuyến" },
    { icon: <Palette className="w-4 h-4" />, label: "Sáng tạo nội dung AI" },
    { icon: <Bot className="w-4 h-4" />, label: "AI có trách nhiệm" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Cột trái: Giới thiệu và Kỹ năng */}
          <div className="text-left flex flex-col justify-center">
            <p className="text-sm font-medium text-pink-400 uppercase tracking-widest mb-2">
              Về bản thân
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Xin chào! Em là Phạm Thị Mai, sinh viên trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (ULIS).
              Đây là không gian lưu trữ quá trình học tập và phát triển kỹ năng số của em trong suốt hành trình môn học 
              <span className="font-semibold text-gray-800"> Nhập môn Công nghệ số và Trí tuệ nhân tạo</span>.
              Em đam mê khám phá cách công nghệ có thể hỗ trợ và nâng cao hiệu quả học tập cũng như làm việc.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <motion.span
                  key={tag.label}
                  whileHover={{ scale: 1.05, backgroundColor: "#fbcfe8" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-pink-200 text-pink-700 text-sm font-medium rounded-xl cursor-pointer shadow-sm transition-colors"
                >
                  {tag.icon}
                  {tag.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Cột phải: Các mục tiêu */}
          <div className="grid grid-rows-2 gap-6 relative h-full">
            {/* Background trang trí nhỏ phía sau cards */}
            <div className="hidden md:block absolute -top-10 -right-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <ObjectiveCard
              icon={<Target className="w-6 h-6" />}
              title="Mục tiêu học tập"
              description="Hiểu và ứng dụng được các công nghệ số cơ bản, từ quản lý tệp tin đến khai thác AI tạo sinh trong học tập và nghiên cứu ngôn ngữ."
            />

            <ObjectiveCard
              icon={<FolderOpen className="w-6 h-6" />}
              title="Mục tiêu Portfolio"
              description="Lưu trữ và trình bày các sản phẩm học tập một cách có hệ thống, thể hiện sự phát triển kỹ năng số qua từng tuần học."
            />
          </div>

        </div>
      </div>
    </section>
  );
}
