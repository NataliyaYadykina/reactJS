import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const CounterRedux = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const reset = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <div>
            <h2>Counter Redux</h2>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterRedux;
