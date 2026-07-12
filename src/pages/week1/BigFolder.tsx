export default function BigFolder() {
  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[4/3] flex items-center justify-center perspective-[1500px]">
      
      {/* 3D Wrapper that tilts the entire folder */}
      <div className="relative w-[90%] h-[80%] transition-transform duration-1000 ease-out preserve-3d" 
           style={{ transform: 'rotateX(15deg) rotateY(20deg) rotateZ(-5deg)', transformStyle: 'preserve-3d' }}>
        
        {/* Back flap of the folder */}
        <div className="absolute inset-0 bg-yellow-600 rounded-lg shadow-inner flex flex-col justify-end p-4 border border-yellow-700/50"
             style={{ transform: 'translateZ(-10px)' }}>
          
          {/* Front Label/Tab on back flap */}
          <div className="absolute w-[30%] h-[20%] -top-[10%] left-0 bg-yellow-600 rounded-t-lg shadow-inner z-[-1] border-t border-l border-yellow-500"></div>
        </div>
        
        {/* Mock papers inside the folder (staggered appearance) */}
        {/* Paper 1 */}
        <div className="absolute w-[85%] h-[95%] bottom-2 left-1/2 -translate-x-1/2 bg-white rounded shadow-md flex flex-col gap-3 p-4 opacity-0 animate-paper-slide-1" 
             style={{ animationDelay: '0.4s', animationDuration: '0.8s', transform: 'translateZ(-5px)' }}>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          <div className="h-2 w-full bg-gray-100 rounded"></div>
          <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
          <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
        </div>
        
        {/* Paper 2 */}
        <div className="absolute w-[92%] h-[88%] bottom-1 left-1/2 -translate-x-1/2 bg-yellow-50 rounded shadow-lg flex flex-col gap-3 p-4 opacity-0 animate-paper-slide-2 border border-yellow-100" 
             style={{ animationDelay: '0.6s', animationDuration: '0.8s', transform: 'translateZ(0px)' }}>
          <div className="h-5 w-2/3 bg-yellow-200 rounded"></div>
          <div className="h-2 w-full bg-yellow-100 rounded"></div>
          <div className="h-2 w-5/6 bg-yellow-100 rounded"></div>
          <div className="h-2 w-full bg-yellow-100 rounded"></div>
          <div className="h-2 w-3/4 bg-yellow-100 rounded"></div>
        </div>

        {/* Front flap of the folder (animates open partially) */}
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-yellow-500 to-yellow-400 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col justify-end p-5 border-t border-yellow-300 origin-bottom animate-folder-flap-open"
          style={{ transform: 'translateZ(10px)' }}
        >
          <div className="text-yellow-100 opacity-70 mb-2 transform -translate-y-2">
            <svg className="w-10 h-10 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <h3 className="text-white font-extrabold text-2xl tracking-wider drop-shadow-md">Tài liệu</h3>
          <p className="text-yellow-100 font-medium drop-shadow-sm">Tuần 1</p>
        </div>

      </div>
    </div>
  );
}
