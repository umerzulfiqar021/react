import { useState } from 'react';
import Button from '../components/ui/Button';
import DestinationCard from '../components/ui/DestinationCard';

interface DestinationSelectionProps {
  onContinue?: (destination: 'dubai' | 'bali') => void;
}

export default function DestinationSelection({ onContinue }: DestinationSelectionProps) {
  const [selected, setSelected] = useState<'dubai' | 'bali' | null>(null);

  const handleContinue = () => {
    if (selected && onContinue) {
      onContinue(selected);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-slate-100 flex flex-col items-center justify-center p-6 select-none relative overflow-hidden">
      
      {/* Background Soft Glow Effect */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.05),transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Website Responsive Shell (Centered, full-screen flexible wrapper) */}
      <div className="w-full max-w-2xl flex flex-col justify-between items-center text-center relative z-10 py-12">
        
        {/* 1. Header Section */}
        <div className="flex flex-col items-center mb-8">
          <span className="font-serif text-4xl tracking-[0.3em] text-[#C5A880] mb-6 font-medium">
            ORA
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-white font-normal mb-3 tracking-wide">
            Where are you?
          </h1>
          <p className="text-neutral-400 text-sm max-w-md leading-relaxed px-4">
            Select your destination to discover exclusive local experiences.
          </p>
        </div>

        {/* 2. Reusable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl px-4 py-8">
          <DestinationCard
            name="Dubai"
            country="UAE"
            flag="🇦🇪"
            isSelected={selected === 'dubai'}
            onClick={() => setSelected('dubai')}
            theme="gold"
          />

          <DestinationCard
            name="Bali"
            country="Indonesia"
            flag="🇮🇩"
            isSelected={selected === 'bali'}
            onClick={() => setSelected('bali')}
            theme="green"
          />
        </div>

        {/* 3. Reusable Action Button */}
        <div className="w-full max-w-xs px-4 mt-6">
          <Button
            onClick={handleContinue}
            disabled={selected === null}
          >
            Continue
          </Button>
        </div>

      </div>

    </div>
  );
}
