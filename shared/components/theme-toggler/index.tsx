import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MoonIcon } from './sun-icon';
import { SunIcon } from './moon-icon';

const ThemeToggler: React.FC = () => {
    const { systemTheme, theme, setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const spring = {
        type: 'string',
        stiffness: 700,
        damping: 30,
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const changeTheme = () => {
        resolvedTheme === 'night' ? setTheme('corporate') : setTheme('night');
    };

    if (!isMounted) return null;

    return (
        <button
            className=''
            onClick={() => changeTheme()}>
            {resolvedTheme === 'corporate' ? (<MoonIcon></MoonIcon>) : (<SunIcon></SunIcon>)}
        </button>

    );
};

export default ThemeToggler;