// npm install @reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';

// reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if (state > 0) {
                return state - 1;
            }
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

// store
const store = configureStore({
    reducer: counterReducer,
});

export default store;
