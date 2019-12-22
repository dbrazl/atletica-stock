import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const {
            username,
            name,
            email,
            avatar_id,
            cellphone,
            personality,
            ...rest
        } = payload.data;

        const profile = {
            username,
            name,
            email,
            avatar_id,
            cellphone,
            personality,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'user', profile);

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
