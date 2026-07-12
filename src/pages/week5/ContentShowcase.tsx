import { Palette, Sparkles, Wand2, Film } from "lucide-react";

export default function ContentShowcase() {
  const steps = [
    {
      title: "Lên ý tưởng (Ideation)",
      tool: "ChatGPT / Claude",
      desc: "Sử dụng AI để brainstorm ý tưởng cốt truyện, dàn bài chi tiết và định hướng phong cách nghệ thuật.",
      color: "border-pink-200 bg-gradient-to-r from-pink-50 to-pink-100/50",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Tạo hình ảnh (Image Gen)",
      tool: "Midjourney / DALL-E 3",
      desc: "Viết prompt chi tiết (lighting, camera angle, style) để tạo ra các asset hình ảnh chất lượng cao.",
      color: "border-rose-200 bg-gradient-to-r from-rose-50 to-rose-100/50",
      icon: <Wand2 className="w-5 h-5" />
    },
    {
      title: "Biên tập & Hoàn thiện",
      tool: "Canva / Premiere Pro",
      desc: "Kết hợp hình ảnh, âm thanh AI và text để tạo thành video hoặc slide thuyết trình chuyên nghiệp.",
      color: "border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100/50",
      icon: <Film className="w-5 h-5" />
    },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-50 pb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-pink-600 shadow-inner">
          <Palette className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quy trình sáng tạo nội dung số</h2>
          <p className="text-sm text-gray-500 mt-1">Các bước kết hợp AI vào quy trình làm việc</p>
        </div>
      </div>

      <div className="relative flex-1">
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-pink-100 z-0 hidden sm:block"></div>

        <div className="space-y-6 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white border-4 border-pink-50 shadow-sm flex items-center justify-center text-pink-500 text-xl z-10 relative group-hover:scale-110 group-hover:border-pink-200 transition-all duration-300">
                {step.icon}
              </div>
              <div className={`flex-1 p-5 rounded-2xl border ${step.color} shadow-sm group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">{step.title}</h4>
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-white rounded uppercase tracking-wider text-pink-600 shadow-sm border border-pink-100">
                    {step.tool}
                  </span>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
