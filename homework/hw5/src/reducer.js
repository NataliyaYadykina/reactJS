// Action types
const TOGGLE_THEME = 'TOGGLE_THEME';

// Initial state
const initialState = {
    isDarkMode: false // По умолчанию светлая тема
};

// Reducer
const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            };
        default:
            return state;
    }
};

// Action creators
export const toggleTheme = () => ({
    type: TOGGLE_THEME
});

export default themeReducer;