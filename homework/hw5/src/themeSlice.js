import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false // По умолчанию светлая тема
    },
    reducers: {
        toggleTheme: state => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export const selectIsDarkMode = state => state.theme.isDarkMode;
export default themeSlice.reducer;