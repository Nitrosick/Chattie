import { Reducer } from 'redux';
import {
    TOGGLE_BUTTON, LOGIN, LOGOUT, APP_INITIALIZE,
    AuthActions, AuthState
} from './types';

const initialState: AuthState = {
    isLogged: false,
    userId: null,
    isAppInitialized: false,
    isDisabled: false
};

export const authReducer: Reducer<AuthState, AuthActions> = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: true,
                userId: action.userId
            }
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                userId: null
            }
        case APP_INITIALIZE:
            return {
                ...state,
                isAppInitialized: true
            }
        case TOGGLE_BUTTON:
            return {
                ...state,
                isDisabled: action.value
            }
        default:
            return state;
    }
};
