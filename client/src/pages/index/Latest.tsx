import PropertyCard from '../../components/PropertyCard';

interface LatestProps {
  properties?: Array<React.ComponentProps<typeof PropertyCard>['property']>;
}

export default function Latest({ properties = [] }: LatestProps) {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-inherit">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3 block">
              LATEST LISTINGS
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
              Explore for your taste.
            </h2>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            View all listings
          </button>
        </div>

        {/* Listings Grid or Empty State */}
        {properties && properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} variant="index" />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-gray-300 rounded-[32px] p-16 text-center text-gray-400">
            No Listings Yet
          </div>
        )}
      </div>
    </section>
  );
}