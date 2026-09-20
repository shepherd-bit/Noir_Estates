interface NavbarProps {
  liveCount?: number;
  onNavigate?: (page: 'index' | 'properties') => void;
  onListProperty?: () => void;
}

export default function Navbar({ liveCount = 0, onNavigate, onListProperty }: NavbarProps) {
  return (
    <header className="w-full bg-[#FBF9F5] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Left: Brand Logo (Nudged slightly inward via container padding) */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate?.('index')}>
          <span className="text-xl font-black tracking-tight text-black">NOIR.</span>
          <span className="text-xs uppercase tracking-widest text-gray-500 font-medium border-l border-gray-300 pl-3">
            Estate
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <button 
            onClick={() => onNavigate?.('index')}
            className="text-black hover:text-gray-600 transition-colors uppercase text-xs"
          >
            Index
          </button>
          <button 
            onClick={() => onNavigate?.('properties')}
            className="text-gray-500 hover:text-black transition-colors uppercase text-xs"
          >
            Properties
          </button>
        </nav>

        {/* Right: Live Counter & CTA Button (Pulled inward) */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-xs font-medium text-gray-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>{liveCount} LIVE</span>
          </div>

          <button 
            onClick={onListProperty}
            className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all shadow-sm"
          >
            List Property
          </button>
        </div>

      </div>
    </header>
  );
}