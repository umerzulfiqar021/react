interface SignInOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInOverlay({ isOpen, onClose }: SignInOverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-black z-[60] flex flex-col justify-between p-8 sm:p-12 overflow-y-auto transition-all duration-500 ease-out outline-none ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* 1. Top Bar: Left Close Button */}
      <div className="flex justify-start w-full">
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors duration-300 outline-none cursor-pointer"
          aria-label="Close sign in screen"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* 2. Center Brand Area */}
      <div className="flex flex-col items-center justify-center my-auto py-8">
        {/* Large Gold Logo */}
        <h1 className="font-serif text-6xl tracking-[0.25em] text-[#C5A880] font-normal leading-none pl-[0.25em]">
          ORA
        </h1>

        {/* Elegant Separator */}
        <div className="flex items-center justify-center gap-3 w-32 mt-4" aria-hidden="true">
          <div className="h-[1px] bg-[#C5A880]/30 flex-grow" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          <div className="h-[1px] bg-[#C5A880]/30 flex-grow" />
        </div>

        {/* Luxury Subtitle */}
        <p className="font-serif italic text-lg text-[#C5A880]/90 text-center max-w-[280px] mt-6 leading-relaxed">
          Unlock exclusive access to wellness, beauty, and luxury experiences.
        </p>
      </div>

      {/* 3. Authentication Buttons & Agreements Footer */}
      <div className="w-full flex flex-col items-center gap-4">
        {/* Apple Login */}
        <button
          onClick={onClose}
          className="w-full max-w-sm bg-[#C5A880] text-black font-semibold text-[10px] tracking-[0.2em] py-4 rounded-2xl flex items-center justify-center gap-2.5 hover:opacity-90 transition-opacity duration-300 cursor-pointer outline-none uppercase"
        >
          {/* Apple SVG Logo */}
          <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.37.13-9.13-1.9-14.3-6.08-3.35-2.62-7.16-7.23-11.45-13.85-8.23-12.75-14.73-28.43-19.5-47.05-4.78-18.62-7.17-34.99-7.17-49.12 0-16.71 3.98-29.8 11.96-39.26 7.97-9.47 17.81-14.24 29.5-14.34 5.92 0 12.35 1.76 19.32 5.26 6.96 3.51 11.2 5.26 12.74 5.26 1.34 0 5.46-1.63 12.36-4.88 6.9-3.26 12.79-4.82 17.67-4.69 13.9.5 24.6 5.64 32.1 15.42-12.16 7.37-18.17 17.51-18.04 30.45.13 10.12 3.86 18.52 11.2 25.18 7.33 6.67 16.03 10.33 26.11 10.98-2.69 7.87-6.22 15.82-10.58 23.86zM119.22 32.22c0-7.87 2.82-15.17 8.46-21 5.64-5.83 12.44-9.13 20.4-9.9 1 7.63-1.9 14.8-7.66 21.52-5.77 6.72-12.77 10.36-21 10.93-.13-1.04-.2-1.04-.2-1.55z" />
          </svg>
          Continue with Apple
        </button>

        {/* Google Login */}
        <button
          onClick={onClose}
          className="w-full max-w-sm border border-[#C5A880]/70 text-[#C5A880] font-semibold text-[10px] tracking-[0.2em] py-4 rounded-2xl flex items-center justify-center gap-2.5 hover:bg-[#C5A880]/10 transition-colors duration-300 cursor-pointer outline-none uppercase"
        >
          {/* Google SVG Logo */}
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          Continue with Google
        </button>

        {/* Terms and Privacy Agreement footer */}
        <p className="text-[10px] text-neutral-500 text-center tracking-wide leading-relaxed mt-6 max-w-[280px]">
          By continuing, you agree to our{' '}
          <a href="#" className="underline text-neutral-400 hover:text-white transition-colors duration-200">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline text-neutral-400 hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
