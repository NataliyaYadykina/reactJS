import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
    fetchUsersSuccess,
    fetchUsersFailure,
} from '../actions/userActions';

function* fetchUsersSaga() {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

function* watchFetchUsers() {
    yield takeEvery('FETCH_USERS_REQUEST', fetchUsersSaga);
}

export default function* rootSaga() {
    yield watchFetchUsers();
}
