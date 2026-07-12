export default function FolderStructure() {
  return (
    <div className="w-full flex flex-col shadow-xl rounded-xl overflow-hidden border border-pink-200/50 bg-white">
      {/* Window Header (macOS style) */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-b border-pink-100 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-inner"></div>
        </div>
        <div className="text-xs font-bold tracking-widest text-pink-700/70 uppercase">
          Workspace / Portfolio_AI_CNS
        </div>
        <div className="w-12"></div> {/* Spacer to center the title */}
      </div>

      <div className="flex flex-col sm:flex-row h-full">
        {/* Left Sidebar: Rules & Convention */}
        <div className="w-full sm:w-2/5 bg-pink-50/30 p-5 border-b sm:border-b-0 sm:border-r border-pink-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="p-1.5 bg-pink-100 rounded-lg text-pink-600">📜</span>
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                Naming Convention
              </h4>
            </div>
            
            <div className="space-y-4">
              <div className="group">
                <p className="text-[10px] font-bold text-pink-500 uppercase tracking-wider mb-1.5">Công thức chuẩn</p>
                <div className="text-xs font-mono text-gray-800 bg-white p-2.5 rounded-lg border border-pink-100 shadow-sm break-words transition-all group-hover:border-pink-300">
                  [Năm][Tháng][Ngày]_[Tên_Dự_Án]_[Phiên_Bản]
                </div>
              </div>
              
              <div className="group">
                <p className="text-[10px] font-bold text-pink-500 uppercase tracking-wider mb-1.5">Ví dụ áp dụng</p>
                <div className="text-xs font-mono text-gray-800 bg-white p-2.5 rounded-lg border border-pink-100 shadow-sm transition-all group-hover:border-pink-300">
                  20240315_<span className="text-pink-600 font-bold">PortfolioAICNS</span>_v1.0.pdf
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-rose-50/50 p-3 rounded-lg border border-rose-100/50">
            <p className="text-[11px] text-rose-800/80 leading-relaxed font-medium">
              💡 <strong className="text-rose-900">Tư duy tổ chức:</strong> Áp dụng Workflow-based hierarchy kết hợp đánh số thứ tự (01, 02...) giúp duy trì trật tự tuyến tính độc lập trên mọi hệ điều hành.
            </p>
          </div>
        </div>

        {/* Right Content: Tree Structure */}
        <div className="w-full sm:w-3/5 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="p-1.5 bg-gray-50 rounded-lg text-gray-600">🗂️</span>
            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
              Cấu trúc phân cấp
            </h4>
          </div>

          <div className="font-mono text-[13px] text-gray-600 bg-gray-50/50 rounded-xl p-4 border border-gray-100 overflow-x-auto shadow-inner">
            <div className="flex items-center gap-2 font-bold text-gray-800 mb-2">
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
              Portfolio_AI_CNS_2024/
            </div>
            
            <div className="pl-2 ml-2 border-l-2 border-gray-200 space-y-3 relative">
              {/* Folder 01 */}
              <div className="relative">
                <div className="absolute w-3 border-b-2 border-gray-200 top-2.5 -left-2"></div>
                <div className="flex items-center gap-2 ml-3">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
                  <span className="font-semibold text-gray-700">01_Requirements/</span>
                </div>
                <div className="pl-6 ml-4 mt-1.5 flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors cursor-default">
                  <svg className="w-3.5 h-3.5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  Rubric_DanhGia.pdf
                </div>
              </div>

              {/* Folder 02 */}
              <div className="relative">
                <div className="absolute w-3 border-b-2 border-gray-200 top-2.5 -left-2"></div>
                <div className="flex items-center gap-2 ml-3">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
                  <span className="font-semibold text-gray-700">02_Research/</span>
                </div>
                <div className="pl-6 ml-4 mt-1.5 flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors cursor-default">
                  <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  20240310_AI_Ethics.docx
                </div>
              </div>

              {/* Folder 03 */}
              <div className="relative">
                <div className="absolute w-3 border-b-2 border-gray-200 top-2.5 -left-2"></div>
                <div className="flex items-center gap-2 ml-3">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
                  <span className="font-semibold text-gray-700">03_Assets/</span>
                </div>
                <div className="pl-6 ml-4 mt-1.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-3.5 h-3.5 text-blue-300" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
                    Images/
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-3.5 h-3.5 text-blue-300" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
                    Fonts/
                  </div>
                </div>
              </div>

              {/* Folder 04 */}
              <div className="relative">
                <div className="absolute w-3 border-b-2 border-gray-200 top-2.5 -left-2"></div>
                <div className="flex items-center gap-2 ml-3">
                  <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 6L9 6 11.25 9 21.75 9 21.75 19.5 2.25 19.5z" /></svg>
                  <span className="font-semibold text-gray-700">04_Final_Outputs/</span>
                </div>
                <div className="pl-6 ml-4 mt-1.5 flex items-center gap-2 text-gray-500 hover:text-pink-600 transition-colors cursor-default">
                  <svg className="w-3.5 h-3.5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  20240320_BaoCao_Tuan1.pdf
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
