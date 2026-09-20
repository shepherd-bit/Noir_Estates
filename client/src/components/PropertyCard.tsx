interface PropertyCardProps {
  property: any;
  variant?: 'index' | 'grid' | 'list';
}

export default function PropertyCard({ property, variant = 'index' }: PropertyCardProps) {
  // Support both Strapi v4 (nested under attributes) and flat structures
  const attrs = property?.attributes || property;
  
  if (!attrs) return null;

  const imageUrl = attrs.thumbnail?.data?.attributes?.url 
    ? `http://localhost:1337${attrs.thumbnail.data.attributes.url}` 
    : attrs.thumbnail?.url 
    ? `http://localhost:1337${attrs.thumbnail.url}` 
    : '';

  const formatPrice = (val: number) => {
    if (!val) return '$0';
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val}`;
  };

  if (variant === 'index') {
    return (
      <div className="relative h-[480px] w-full rounded-[28px] overflow-hidden shadow-lg group cursor-pointer bg-neutral-900">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={attrs.propertyName || 'Property'} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-neutral-500 text-sm">
            No Image
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-semibold text-black">
              {formatPrice(attrs.price)}
            </span>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white uppercase tracking-wider">
              {attrs.propertyType || 'Property'}
            </span>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            ♡
          </button>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
          <p className="text-xs uppercase tracking-widest text-neutral-300 mb-1">
            {attrs.neighborhood || attrs.city || 'Location'}
          </p>
          <h3 className="text-2xl font-semibold mb-3 tracking-tight">
            {attrs.propertyName || 'Untitled Property'}
          </h3>
          <div className="flex items-center gap-4 text-xs text-neutral-300 border-t border-white/10 pt-3">
            <span>🛏 {attrs.bedrooms || 0} bd</span>
            <span>🛁 {attrs.bathrooms || 0} ba</span>
            <span>📐 {attrs.areaSqFt || 0} ft²</span>
          </div>
        </div>
      </div>
    );
  }

  return <div>Grid/List Variant Coming Soon</div>;
}