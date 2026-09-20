import { useState, useEffect } from 'react';
import Filter from './properties/Filter';
import PropertyCard from '../components/PropertyCard';

export default function PropertiesPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch properties from Strapi backend with full asset population
  useEffect(() => {
    fetch('http://localhost:1337/api/properties?populate=*')
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching properties:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-neutral-900">
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Layout Grid: Filter Sidebar + Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Filter Sidebar (takes 4 out of 12 columns, giving it more natural width) */}
            <aside className="lg:col-span-4 sticky top-28">
                <Filter />
            </aside>

          {/* Properties Listing Grid Area */}
          <section className="lg:col-span-8">
            {loading ? (
              <div className="border border-dashed border-gray-300 rounded-[32px] p-20 text-center text-neutral-400">
                Loading properties...
              </div>
            ) : properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {properties.map((item) => (
                  <PropertyCard 
                    key={item.id} 
                    property={item} 
                    variant="grid" 
                  />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-gray-300 rounded-[32px] p-20 text-center text-neutral-400 col-span-2">
                No Properties Available
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}