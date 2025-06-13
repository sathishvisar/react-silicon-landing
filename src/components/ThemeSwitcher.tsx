// src/components/ThemeSwitcher.tsx
import { useEffect, useState } from 'react';
import ToggleButton from './atoms/ToggleButton';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    console.log('storedTheme', storedTheme)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const dark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
    setIsDark(!isDark);
  };

  return (
    <ToggleButton
        labelLeft="Light"
        labelRight="Dark"
        initialValue={isDark}
        onToggle={() => {
            toggleTheme()
        }}
    />
  );
};

