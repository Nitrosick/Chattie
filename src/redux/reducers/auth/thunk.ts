import { ThunkAction } from "redux-thunk";
import { NavigateFunction } from "react-router-dom";
import { authAPI } from "@api/api";
import { StoreState } from "@redux/index";
import { AuthActions } from "./types";
import { appInitialize, login, logout, toggleButton } from "./actions";

type ThunkType = ThunkAction<void, StoreState, unknown, AuthActions>;

export const autologonThunk = (): ThunkType => {
    return dispatch => {
        authAPI.autologon().then(data => {
            if (data.status === 'ok') {
                dispatch(login(data.user_id));
            } else {
                localStorage.clear();
            };
            dispatch(appInitialize());
        })
    };
};

export const loginThunk = (
    username: string,
    password: string,
    navigate: NavigateFunction,
    setApiError: React.Dispatch<React.SetStateAction<string>>
): ThunkType => {
    return dispatch => {
        dispatch(toggleButton(true));

        authAPI.login(username, password).then(data => {
            if (data.status === 'ok') {
                dispatch(login(data.user_id));

                localStorage.setItem('access_token', data.access_token);
                localStorage.setItem('user_id', data.user_id);

                setTimeout(() => {navigate('/chats')}, 5);
            } else {
                setApiError(data.message);
            };
            dispatch(toggleButton(false));
        })
    };
};

export const logoutThunk = (navigate: NavigateFunction): ThunkType => {
    return dispatch => {
        authAPI.logout().then(data => {
            if (data.status === 'ok') {
                dispatch(logout());
                localStorage.clear();
                navigate('/login');
            };
        })
    };
};

export const registrationThunk = (
    username: string,
    password: string,
    navigate: NavigateFunction,
    setApiError: React.Dispatch<React.SetStateAction<string>>
): ThunkType => {
    return dispatch => {
        dispatch(toggleButton(true));

        authAPI.registration(username, password).then(data => {
            if (data.status === 'ok') {
                navigate('/login');
            } else {
                setApiError(data.message);
            };
            dispatch(toggleButton(false));
        })
    };
};
