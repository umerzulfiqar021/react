interface CategoryItemProps {
  name: string;
  iconName: 'spa' | 'hair' | 'face' | 'fitness' | 'nails' | 'makeup' | 'ivdrips';
  isActive?: boolean;
  onClick?: () => void;
}

export default function CategoryItem({ name, iconName, isActive = false, onClick }: CategoryItemProps) {
  // Render clean vector SVGs matching the branding
  const renderIcon = () => {
    const iconClass = 'w-5 h-5 stroke-[#C5A880] transition-colors duration-300';
    
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
      case 'nails':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Hand/Fingers outline */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v-6a1.5 1.5 0 013 0v6M9 11.5v-6.5a1.5 1.5 0 013 0v6.5M6 13v-5.5a1.5 1.5 0 013 0V13M15 11v-4.5a1.5 1.5 0 013 0V11m-9 9.5H16a2.5 2.5 0 002.5-2.5V13c0-2-1.5-3.5-3.5-3.5H9C7 9.5 5.5 11 5.5 13v4c0 1.93 1.57 3.5 3.5 3.5z" />
          </svg>
        );
      case 'makeup':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* Mirror/brush symbol */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 100-12 6 6 0 000 12zM12 18.75V21M9 21h6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 6a3.5 3.5 0 00-7 0" />
          </svg>
        );
      case 'ivdrips':
        return (
          <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {/* IV Drip bag and drop */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M12 3v3m-3 0h6a1 1 0 011 1v9a4 4 0 01-4 4H10a4 4 0 01-4-4V7a1 1 0 011-1zm4.5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2.5 cursor-pointer group outline-none flex-shrink-0"
    >
      {/* Circle Icon Container */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
        isActive
          ? 'bg-[#C5A880]/10 border-[#C5A880] shadow-[0_0_12px_rgba(197,168,128,0.15)] scale-[1.05]'
          : 'bg-[#0E0E0E] border-white/10 group-hover:border-[#C5A880]/50 group-hover:scale-[1.03]'
      }`}>
        {renderIcon()}
      </div>

      {/* Label Text */}
      <span className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
        isActive ? 'text-[#C5A880]' : 'text-neutral-400 group-hover:text-white'
      }`}>
        {name}
      </span>
    </button>
  );
}
