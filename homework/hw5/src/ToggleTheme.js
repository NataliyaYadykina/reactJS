import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ToggleTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
        if (theme === 'light') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className="toggle-container">
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
                <span className="slider round"></span>
            </label>
            <span className="toggle-label">Switch theme</span>
        </div>
    );
};

export default ToggleTheme;
