interface DestinationCardProps {
  name: string;
  country: string;
  flag: string;
  isSelected: boolean;
  onClick: () => void;
  theme: 'gold' | 'green';
}

export default function DestinationCard({
  name,
  country,
  flag,
  isSelected,
  onClick,
  theme,
}: DestinationCardProps) {
  // Define theme-specific styling tokens for active selection states
  const themeStyles = {
    gold: {
      bgActive: 'bg-[#2A1D13] border-[#C5A880] shadow-[0_0_25px_rgba(197,168,128,0.12)]',
      borderGlow: 'via-[#C5A880]',
      textActive: 'text-[#C5A880]',
    },
    green: {
      bgActive: 'bg-[#111B15] border-[#386641] shadow-[0_0_25px_rgba(56,102,65,0.12)]',
      borderGlow: 'via-[#386641]',
      textActive: 'text-emerald-500/80',
    },
  }[theme];

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-8 rounded-3xl transition-all duration-300 relative overflow-hidden outline-none w-full ${
        isSelected
          ? `${themeStyles.bgActive} border-2 scale-[1.02]`
          : 'bg-[#0E0E0E] border-2 border-white/5 hover:border-white/10 hover:scale-[1.01]'
      }`}
    >
      {/* Top selection glow highlight bar */}
      {isSelected && (
        <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent ${themeStyles.borderGlow} to-transparent`} />
      )}

      {/* Flag Emoji */}
      <span className="text-4xl md:text-5xl mb-4 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] select-none">
        {flag}
      </span>

      {/* City Title */}
      <span className="text-base font-semibold text-white tracking-wide mb-1">
        {name}
      </span>

      {/* Country Label */}
      <span className={`text-xs tracking-wider uppercase font-medium ${isSelected ? themeStyles.textActive : 'text-neutral-500'}`}>
        {country}
      </span>
    </button>
  );
}
