'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const DarkModeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return <div>{currentTheme === 'dark' ? <SunIcon className="w-8 h-8 hover:cursor-pointer text-yellow-500" onClick={() => setTheme('light')} /> : <MoonIcon className="w-8 h-8 hover:cursor-pointer text-gray-900" onClick={() => setTheme('dark')} />}</div>;
};
