import React from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';

import SunIcon from './icons/SunIconFill.png';
import MoonIcon from './icons/MoonIconFill.png';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      size="lg"
      color="secondary"
      startContent={
        theme === 'dark' ? null : 
        <img src={MoonIcon} alt="Sun" style={{width: '1em', height: '1em'}} />
      }
      endContent={
        theme === 'dark' ? 
        <img src={SunIcon} alt="Moon" style={{width: '1em', height: '1em'}} /> : null
      }
    />
  );
}