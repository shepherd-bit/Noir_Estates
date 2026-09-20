import { useState } from 'react';

const LA_NEIGHBORHOODS = [
  'Beverly Hills',
  'Hollywood Hills',
  'Bel Air',
  'Malibu',
  'Downtown LA',
  'Santa Monica',
  'Brentwood',
  'Silver Lake',
];

const PROPERTY_TYPES = ['Apartment', 'Villa', 'Land'];

const AMENITIES = [
  'Pool',
  'Garden',
  'Garage',
  'Gym',
  'Sea View',
  'Smart Home',
  'Wine Cellar',
  'Rooftop',
  'Beach Access',
  'Balcony',
  'Air Conditioning',
  'Security System',
  'Parking',
  'Pet Friendly',
];

export default function Filter() {
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>('Villa');
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(4.5); // Stored as millions (e.g., 4.5M)
  const [squareFootage, setSquareFootage] = useState<number>(5000);
  const [yearBuilt, setYearBuilt] = useState<number>(2026);

  const toggleNeighborhood = (neighborhood: string) => {
    setSelectedNeighborhoods(prev =>
      prev.includes(neighborhood)
        ? prev.filter(n => n !== neighborhood)
        : [...prev, neighborhood]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearAll = () => {
    setSelectedNeighborhoods([]);
    setSelectedType('Villa');
    setBedrooms(0);
    setBathrooms(0);
    setSelectedAmenities([]);
    setPriceRange(4.5);
    setSquareFootage(5000);
    setYearBuilt(2026);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm flex flex-col max-h-[85vh]">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100 flex-shrink-0">
        <h2 className="text-sm font-bold tracking-widest text-gray-900">FILTERS</h2>
        <button
          onClick={clearAll}
          className="text-xs font-semibold px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full transition-colors"
        >
          CLEAR ALL
        </button>
      </div>

      {/* Independently Scrollable Body */}
      <div className="overflow-y-auto pr-2 space-y-8 custom-scrollbar">
        {/* Location Section */}
        <div>
          <label className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-4">
            Location
          </label>
          <div className="space-y-3">
            {LA_NEIGHBORHOODS.map(neighborhood => (
              <label key={neighborhood} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedNeighborhoods.includes(neighborhood)}
                  onChange={() => toggleNeighborhood(neighborhood)}
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                  {neighborhood}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
              Price Range
            </span>
            <span className="text-xs font-bold px-3 py-1 bg-gray-100 rounded-full text-gray-900">
              $80K —${priceRange}M
            </span>
          </div>
          <input
            type="range"
            min="0.1"
            max="10"
            step="0.1"
            value={priceRange}
            onChange={e => setPriceRange(parseFloat(e.target.value))}
            className="w-full accent-amber-700 cursor-pointer mb-2"
          />
        </div>

        {/* Property Type Section */}
        <div>
          <label className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-3">
            Property Type
          </label>
          <div className="flex flex-wrap gap-2">
            {PROPERTY_TYPES.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedType === type
                    ? 'bg-gray-100 text-gray-900 font-semibold shadow-inner'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Bedrooms & Bathrooms Counters */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-3">
              Bedrooms
            </label>
            <div className="flex items-center justify-between bg-gray-50 rounded-full p-1 border border-gray-100">
              <button
                onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="text-sm font-semibold text-gray-900">{bedrooms}</span>
              <button
                onClick={() => setBedrooms(bedrooms + 1)}
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-3">
              Bathrooms
            </label>
            <div className="flex items-center justify-between bg-gray-50 rounded-full p-1 border border-gray-100">
              <button
                onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}
                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="text-sm font-semibold text-gray-900">{bathrooms}</span>
              <button
                onClick={() => setBathrooms(bathrooms + 1)}
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Square Footage */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
              Square Footage
            </span>
            <span className="text-xs font-bold text-gray-900">500 — {squareFootage.toLocaleString()} ft²</span>
          </div>
          <input
            type="range"
            min="500"
            max="15000"
            step="100"
            value={squareFootage}
            onChange={e => setSquareFootage(parseInt(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>

        {/* Amenities Section */}
        <div>
          <label className="text-xs font-bold tracking-wider text-gray-400 uppercase block mb-3">
            Amenities
          </label>
          <div className="flex flex-wrap gap-2">
            {AMENITIES.map(amenity => {
              const isSelected = selectedAmenities.includes(amenity);
              return (
                <button
                  key={amenity}
                  onClick={() => toggleAmenity(amenity)}
                  className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {amenity}
                </button>
              );
            })}
          </div>
        </div>

        {/* Year Built */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">
              Year Built
            </span>
            <span className="text-xs font-bold text-gray-900">1990 — {yearBuilt}</span>
          </div>
          <input
            type="range"
            min="1990"
            max="2026"
            step="1"
            value={yearBuilt}
            onChange={e => setYearBuilt(parseInt(e.target.value))}
            className="w-full accent-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}