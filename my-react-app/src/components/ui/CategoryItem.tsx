interface CategoryItemProps {
  name: string;
  iconName: 'spa' | 'hair' | 'face' | 'fitness';
  isActive?: boolean;
  onClick?: () => void;
}

export default function CategoryItem({ name, iconName, isActive = false, onClick }: CategoryItemProps) {
  // Render clean vector SVGs matching the branding
  const renderIcon = () => {
    const iconClass = 'w-6 h-6 stroke-[#C5A880] transition-colors duration-300';
    
    switch (iconName) {
      case 'spa':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Lotus/Spa symbol */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-2.5 4-6 5.5-6 10s3 8 6 8M12 3c2.5 4 6 5.5 6 10s-3 8-6 8M6 13c3 .5 6 .5 9 0" />
          </svg>
        );
      case 'hair':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Scissors symbol */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 5a3 3 0 100 6 3 3 0 000-6zm0 0l4 4m8-4a3 3 0 110 6 3 3 0 010-6zm0 0l-4 4m-2 2l-4 4m8 0L12 14" />
          </svg>
        );
      case 'face':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Face/Skin care symbol */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 8h2m-1-1v2m-14-1H4m1-1v2" />
          </svg>
        );
      case 'fitness':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Dumbbell/Gym weight symbol */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 3M17.25 16.5l-3-3M4.5 10.5a3 3 0 000 6M19.5 7.5a3 3 0 000 6M9 9h6M9 15h6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-3 cursor-pointer group outline-none"
    >
      {/* Circle Icon Container */}
      <div className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300 ${
        isActive
          ? 'bg-[#C5A880]/10 border-[#C5A880] shadow-[0_0_15px_rgba(197,168,128,0.2)] scale-[1.05]'
          : 'bg-[#0E0E0E] border-white/10 group-hover:border-[#C5A880]/50 group-hover:scale-[1.03]'
      }`}>
        {renderIcon()}
      </div>

      {/* Label Text */}
      <span className={`text-[11px] font-medium tracking-wide transition-colors duration-300 ${
        isActive ? 'text-[#C5A880]' : 'text-neutral-400 group-hover:text-white'
      }`}>
        {name}
      </span>
    </button>
  );
}
