// store.js

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';
import loggerMiddleware from './middleware/loggerMiddleware';

const middleware = getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware);

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
