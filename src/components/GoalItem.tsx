export default function GoalItem({ 
  text, 
  delay = "0s" 
}: { 
  text: string; 
  delay?: string; 
}) {
  return (
    <div 
      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-pink-100 shadow-sm opacity-0 animate-slide-in-right hover:shadow-md hover:border-pink-300 hover:scale-[1.01] transition-all"
      style={{ animationDelay: delay }}
    >
      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
        <span className="text-pink-600 font-bold text-lg leading-none mt-[-2px]">•</span>
      </div>
      <span className="text-gray-700 font-medium text-sm sm:text-base">{text}</span>
    </div>
  );
}
