import React from 'react';
import { connect } from "react-redux";

const CounterComponent = (props) => {
    return (
        <div>
            <h1>Counter: {props.count}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    };
};

export default connect(mapStateToProps)(CounterComponent);
