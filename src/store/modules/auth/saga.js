import { takeLatest, put, call, all } from 'redux-saga/effects';

// import history from '../../../services/history';
import api from '../../../services/api';

import {
    signInSuccess,
    signFailure,
    restoreAccountSuccess,
    signUpSuccess,
} from './actions';

export function* singIn({ payload }) {
    try {
        const { username, password } = payload;

        const response = yield call(api.post, 'session', {
            username,
            password,
        });

        const { token, user } = response.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(signInSuccess(token, user));

        // history.push('/projects');
    } catch (err) {
        const erroMessage = err.message;
        yield put(signFailure(erroMessage));
    }
}

export function* signUp({ payload }) {
    try {
        const {
            username,
            name,
            email,
            password,
            personality,
            cellphone,
        } = payload;

        yield call(api.post, 'user', {
            username,
            name,
            email,
            password,
            personality,
            cellphone,
        });

        yield put(signUpSuccess());
        // history.push('/');
    } catch (err) {
        console.tron.log(err.message);
        // eslint-disable-next-line no-underscore-dangle
        const error = JSON.parse(err.response.request._response);
        yield put(signFailure(error.error));
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function* restoreAccount({ payload }) {
    try {
        const { email } = payload;

        yield call(api.put, 'user/restore', {
            email,
        });

        // history.push('/');
        yield put(restoreAccountSuccess());
    } catch (err) {
        // eslint-disable-next-line no-underscore-dangle
        const error = JSON.parse(err.response.request._response);
        yield put(signFailure(error.error));
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', singIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('@auth/RESTORE_ACCOUNT_REQUEST', restoreAccount),
]);
