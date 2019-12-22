export function signInRequest(username, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { username, password },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}

export function signUpRequest(
    username,
    name,
    email,
    password,
    personality,
    cellphone
) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { username, name, email, password, personality, cellphone },
    };
}

export function signUpSuccess() {
    return {
        type: '@auth/SIGN_UP_SUCCESS',
    };
}

export function signOut() {
    return {
        type: '@auth/SIGN_OUT',
    };
}

export function signFailure(erroMessage) {
    return {
        type: '@auth/SIGN_FAILURE',
        payload: { erroMessage },
    };
}

export function restoreAccountRequest(email) {
    return {
        type: '@auth/RESTORE_ACCOUNT_REQUEST',
        payload: { email },
    };
}

export function restoreAccountSuccess() {
    return {
        type: '@auth/RESTORE_ACCOUNT_SUCCESS',
    };
}
