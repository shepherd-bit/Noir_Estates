import PropertyCard from '../../components/PropertyCard';

interface GridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: any[];
}

export default function Grid({ properties }: GridProps) {
  if (!properties || properties.length === 0) {
    return (
      <div className="border border-dashed border-gray-300 rounded-[32px] p-20 text-center text-neutral-400 col-span-2">
        No properties found matching your criteria.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((item) => (
        <PropertyCard 
          key={item.id} 
          property={item} 
          variant="grid" 
        />
      ))}
    </div>
  );
}