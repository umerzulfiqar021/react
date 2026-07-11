import { useEffect, useState } from 'react';
import splashImg from '../assets/splash.jpeg';

interface SplashProps {
  onFinish?: () => void;
}

export default function Splash({ onFinish }: SplashProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fade in the image shortly after mounting
    const mountTimer = setTimeout(() => setMounted(true), 50);

    // Transition to the next screen after 2 seconds
    const transitionTimer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 2000);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(transitionTimer);
    };
  }, [onFinish]);

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden select-none">
      <img
        src={splashImg}
        alt="ORA Splash Screen"
        className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        draggable="false"
      />
    </div>
  );
}
