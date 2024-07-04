export const fetchUserData = () => async dispatch => {
    dispatch({ type: 'FETCH_USER_START' });

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const userData = await response.json();

        dispatch({ type: 'FETCH_USER_SUCCESS', payload: userData });
    } catch (error) {
        dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
    }
};
