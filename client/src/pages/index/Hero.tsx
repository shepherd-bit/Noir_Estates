export default function Hero() {
  return (
    <section className="w-full bg-[#FBF9F5] py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span>Editorial Collection 2026</span>
          </div>

          {/* Headline - Scaled up larger */}
          <h1 className="text-7xl lg:text-8xl font-black tracking-tight text-black leading-[0.95]">
            <span className="block">Homes</span>
            <span className="block font-normal italic my-1">that</span>
            <span className="block">shape</span>
            <span className="block">you.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-base lg:text-lg max-w-xl leading-relaxed">
            A curated archive of brutalist villas, cliff reserves, and gallery apartments. Not listings — residences with a point of view.
          </p>

          {/* Trusted By Section with Image Containers */}
          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-2 overflow-hidden">
              {/* Profile Image Containers */}
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] bg-gray-200 overflow-hidden">
<<<<<<< Updated upstream
                <img src="./Hero-Avatars/Avatar-4.png" alt="Collector 1" className="h-full w-full object-cover" />
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] bg-gray-200 overflow-hidden">
                <img src="./Hero-Avatars/Avatar-11.png" alt="Collector 2" className="h-full w-full object-cover" />
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] bg-gray-200 overflow-hidden">
                <img src="./Hero-Avatars/Avatar-16.png" alt="Collector 3" className="h-full w-full object-cover" />
=======
                <img src="./Hero-Avatars/Avatar-1.png" alt="Collector 1" className="h-full w-full object-cover" />
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] bg-gray-200 overflow-hidden">
                <img src="./Hero-Avatars/Avatar-2.png" alt="Collector 2" className="h-full w-full object-cover" />
              </div>
              <div className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FBF9F5] bg-gray-200 overflow-hidden">
                <img src="./Hero-Avatars/Avatar-3.png" alt="Collector 3" className="h-full w-full object-cover" />
>>>>>>> Stashed changes
              </div>
            </div>
            <div className="text-xs text-gray-600">
              <p className="font-bold text-black">Trusted by 340+ collectors</p>
              <p className="text-gray-500">Architects, founders, editors.</p>
            </div>
          </div>

        </div>

        {/* Right Column: Featured Card Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-[4/5]">
            
            {/* Main Hero Image Container */}
            <img 
              src="./hero.jpg" 
              alt="Hero Property" 
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            {/* Top Bar inside image */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                NOIR Properties
              </span>
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition">
                ♡
              </button>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 z-10">
              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Value</p>
                <p className="text-sm font-black text-black mt-0.5">7 Billion</p>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Total Size</p>
                <p className="text-sm font-black text-black mt-0.5">600K FT²</p>
              </div>
              <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Years of Ops</p>
                <p className="text-sm font-black text-black mt-0.5">17</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}