import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export default function Button({ onClick, disabled = false, children, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 rounded-2xl text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
        disabled
          ? 'bg-[#1F1E1C] text-neutral-600 cursor-not-allowed border border-white/5'
          : 'bg-[#C5A880] text-black hover:bg-[#D5B890] hover:shadow-[0_0_30px_rgba(197,168,128,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:bg-[#B59870]'
      } ${className}`}
    >
      {children}
    </button>
  );
}
