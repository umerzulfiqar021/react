import { useState } from 'react';
import ProfileMenuItem from './ProfileMenuItem';
import SignInOverlay from './SignInOverlay';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedCount?: number;
}

export default function ProfileDrawer({ isOpen, onClose, savedCount = 0 }: ProfileDrawerProps) {
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <>
      {/* 1. Backdrop Overlay (Smooth fade-in and backdrop blur) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* 2. Slide-Over Panel (Full width on mobile, max-width-md on desktop, slides from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-[#090909] border-l border-white/5 z-50 p-8 flex flex-col justify-between overflow-y-auto transition-transform duration-300 outline-none ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div>
          {/* A. Header Row */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A880] uppercase mb-1">
                PROFILE
              </span>
              <h2 className="font-serif text-3xl text-white font-normal">
                Your account
              </h2>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#0E0E0E] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300 outline-none"
              aria-label="Close profile details"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* B. Guest Identity Card (Clickable to open Sign In) */}
          <div
            onClick={() => setSignInOpen(true)}
            className="bg-[#0E0E0E] border border-white/5 hover:border-white/15 rounded-3xl p-6 mt-8 flex items-center gap-5 cursor-pointer hover:bg-white/[0.01] transition-all duration-300 group select-none"
          >
            {/* Avatar container */}
            <div className="w-14 h-14 rounded-full bg-black/40 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] flex-shrink-0 group-hover:border-[#C5A880]/40 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>

            {/* Guest details column */}
            <div className="flex flex-col text-left gap-2.5">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl text-white font-normal leading-none group-hover:text-[#C5A880] transition-colors duration-300">
                  Guest
                </span>
                <svg className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors duration-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Counters */}
              <div className="flex items-center gap-3">
                <div className="bg-black/35 px-4 py-2.5 rounded-xl border border-white/5 text-left min-w-[76px]">
                  <div className="text-[9px] tracking-wider uppercase text-neutral-500 font-semibold mb-0.5">
                    Credits
                  </div>
                  <div className="text-sm font-bold text-[#C5A880]">
                    0
                  </div>
                </div>
                <div className="bg-black/35 px-4 py-2.5 rounded-xl border border-white/5 text-left min-w-[76px]">
                  <div className="text-[9px] tracking-wider uppercase text-neutral-500 font-semibold mb-0.5">
                    Saved
                  </div>
                  <div className="text-sm font-bold text-[#C5A880]">
                    {savedCount}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* C. Credits Activity Box */}
          <div className="bg-[#0E0E0E] border border-white/5 rounded-3xl p-6 mt-4 flex flex-col gap-2 text-left">
            <div className="flex items-baseline justify-between">
              <h3 className="font-serif text-lg text-white font-normal">
                Credits activity
              </h3>
              <span className="text-[#C5A880] text-[10px] font-bold tracking-wider uppercase">
                0 total
              </span>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed">
              Completed purchases will add credits here.
            </p>
          </div>

          {/* D. Interactive Menu Items */}
          <div className="flex flex-col mt-8 border-t border-white/5 pt-2">
            <ProfileMenuItem
              iconName="saved"
              title="Saved Offers"
              description="View your favorite experiences"
            />
            <ProfileMenuItem
              iconName="orders"
              title="Orders"
              description="Track purchases and vouchers"
            />
            <ProfileMenuItem
              iconName="payment"
              title="Payment Methods"
              description="Apple Pay and saved cards"
            />
            <ProfileMenuItem
              iconName="settings"
              title="Settings"
              description="Notifications and preferences"
            />
            <ProfileMenuItem
              iconName="account"
              title="Sign in or register"
              description="Log in or create a new account"
              onClick={() => setSignInOpen(true)}
            />
          </div>
        </div>

        {/* E. Footer Signature */}
        <div className="pt-6 border-t border-white/5 text-center">
          <span className="text-[9px] font-bold tracking-[0.35em] text-neutral-600 uppercase">
            ORA TRAVELS
          </span>
        </div>
      </div>

      {/* 3. Fullscreen Sign In Overlay (Rendered on top of Drawer) */}
      <SignInOverlay 
        isOpen={signInOpen} 
        onClose={() => setSignInOpen(false)} 
      />
    </>
  );
}
