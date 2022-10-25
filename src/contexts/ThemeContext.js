import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const LDContext = createContext()

const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('Light');
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'Light' ? 'Dark' : 'Light'))
    }

    const themeInfo = { theme, toggleTheme }
    return (
        <LDContext.Provider value={themeInfo}>
            {children}
        </LDContext.Provider>
    );
};

export default ThemeContext;