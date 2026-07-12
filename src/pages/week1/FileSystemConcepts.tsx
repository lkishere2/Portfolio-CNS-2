import { HardDrive, FolderTree, FileJson, Link2 } from "lucide-react";

export default function FileSystemConcepts() {
  return (
    <div className="bg-white rounded-xl border border-pink-100 shadow-sm p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-pink-50 pb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
          <HardDrive className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Kiến trúc Lưu trữ Dữ liệu</h3>
          <p className="text-sm text-gray-500">Hiểu sâu về cấu trúc File System của Windows</p>
        </div>
      </div>

      <div className="space-y-6">
        
        {/* Concept 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded text-blue-600"><FolderTree className="w-4 h-4" /></div>
            <h4 className="font-bold text-base text-gray-800">Cây thư mục (Directory Tree)</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hệ thống quản lý tệp trên Windows bắt đầu từ các ổ đĩa gốc (C:, D:). Mọi thư mục con và tệp tin được tổ chức theo hình nhánh cây phân cấp.
          </p>
        </div>

        {/* Concept 2 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded text-blue-600"><Link2 className="w-4 h-4" /></div>
            <h4 className="font-bold text-base text-gray-800">Đường dẫn (File Path)</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Là "địa chỉ nhà" của file. <br/>
            VD: <code className="bg-gray-100 text-pink-600 px-1 py-0.5 rounded text-xs">C:\Users\Admin\Documents\BaoCao.pdf</code>
            <br/>Giúp hệ điều hành định vị chính xác file cần mở.
          </p>
        </div>

        {/* Concept 3 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded text-blue-600"><FileJson className="w-4 h-4" /></div>
            <h4 className="font-bold text-base text-gray-800">Đuôi mở rộng (Extensions)</h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Phần định dạng sau dấu chấm (<code>.docx</code>, <code>.pdf</code>, <code>.exe</code>, <code>.png</code>). Nó báo cho Windows biết phải dùng phần mềm nào để mở file đó.
          </p>
        </div>

      </div>
    </div>
  );
}
