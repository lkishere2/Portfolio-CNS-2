export default function ClosingSentence() {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-3xl p-8 text-center overflow-hidden mt-12">
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200 rounded-full blur-2xl opacity-40" />
      <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-rose-200 rounded-full blur-2xl opacity-30" />
      <p className="relative text-4xl mb-4">🌸</p>
      <blockquote className="relative text-gray-600 text-base italic leading-relaxed mb-4">
        "Công nghệ số không phải là đích đến -- đó là ngôn ngữ mới
        mà mỗi sinh viên cần học để thể hiện tư duy và sáng tạo của mình
        trong thế giới hiện đại."
      </blockquote>
      <p className="relative text-sm text-pink-500 font-medium">
        — Phạm Thị Mai · ULIS 2026
      </p>
    </div>
  );
}
