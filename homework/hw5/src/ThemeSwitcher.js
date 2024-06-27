import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';
import { selectIsDarkMode } from '../features/themeSlice';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectIsDarkMode);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="theme-toggle">
            <label>
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                />
                Toggle Dark Mode
            </label>
        </div>
    );
};

export default ThemeSwitcher;