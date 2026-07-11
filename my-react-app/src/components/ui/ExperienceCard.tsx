interface ExperienceCardProps {
  provider: string;
  title: string;
  location: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
}

export default function ExperienceCard({
  provider,
  title,
  location,
  price,
  originalPrice,
  currency,
  image,
}: ExperienceCardProps) {
  // Format numbers elegantly
  const formattedPrice = price.toLocaleString();
  const formattedOriginal = originalPrice?.toLocaleString();

  return (
    <div className="group bg-[#090909] border border-white/5 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:border-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      
      {/* 1. Image Container (with Zoom Effect) */}
      <div className="w-full aspect-[4/3] overflow-hidden relative bg-neutral-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Soft bottom vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Text Content */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        
        <div className="flex flex-col gap-1 text-left">
          {/* Provider header (small uppercase) */}
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase">
            {provider}
          </span>
          
          {/* Experience Title */}
          <h3 className="text-[15px] font-semibold text-white leading-snug line-clamp-2">
            {title}
          </h3>

          {/* Location details */}
          <div className="flex items-center gap-1.5 mt-2 text-neutral-500">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[11px] tracking-wide truncate">
              {location}
            </span>
          </div>
        </div>

        {/* 3. Pricing Row */}
        <div className="flex items-baseline gap-2 pt-2 border-t border-white/5 text-left">
          <span className="text-xs text-[#C5A880] font-semibold tracking-wider">
            {currency}
          </span>
          <span className="text-base font-bold text-white tracking-wide">
            {formattedPrice}
          </span>
          {originalPrice && (
            <span className="text-xs text-neutral-500 line-through tracking-wider ml-1">
              {currency} {formattedOriginal}
            </span>
          )}
        </div>

      </div>

    </div>
  );
}
