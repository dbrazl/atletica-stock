import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    signed: false,
    loading: false,
    erro: false,
    erroMessage: '',
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@auth/SIGN_IN_SUCCESS': {
                draft.token = action.payload.token;
                draft.signed = true;
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_UP_REQUEST': {
                draft.loading = true;
                draft.erro = false;
                break;
            }
            case '@auth/SIGN_UP_SUCCESS': {
                draft.loading = false;
                break;
            }
            case '@auth/RESTORE_ACCOUNT_REQUEST': {
                draft.loading = true;
                draft.erro = false;
                break;
            }
            case '@auth/RESTORE_ACCOUNT_SUCCESS': {
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_FAILURE': {
                draft.loading = false;
                draft.erro = true;
                draft.erroMessage = action.payload.erroMessage;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.signed = false;
                draft.token = null;
                break;
            }
            default:
        }
    });
}
