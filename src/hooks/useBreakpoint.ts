import { useState, useEffect } from 'react';


const breakpoints = {
  '2xl': 1320,
  xl:    1140,
  lg:     960,
  md:     720,
  sm:       0,
} as const;


export function useBreakpoint() {
  const [bp, setBp] = useState(() => getBreakpoint(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setBp(getBreakpoint(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return bp; // 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}


function getBreakpoint(width: number): keyof typeof breakpoints {
  // loop from largest → smallest
  for (const [label, min] of Object.entries(breakpoints)) {
    if (width >= min) return label as keyof typeof breakpoints;
  }
  return 'sm'; // fallback
}
