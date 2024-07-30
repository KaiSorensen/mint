import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';
import SunIcon from './icons/SunIconWhiteFill.png';
import MoonIcon from './icons/MoonIconFill.png';
import './styles/ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button
            isIconOnly
            onClick={toggleTheme}
            aria-label="Toggle theme"
            size="sm"
            variant="light"
            className="theme-toggle"
            disableRipple
        >
            <img 
                src={theme === 'dark' ? SunIcon : MoonIcon} 
                alt={theme === 'dark' ? "Sun" : "Moon"} 
                className="theme-icon"
            />
        </Button>
    );
}