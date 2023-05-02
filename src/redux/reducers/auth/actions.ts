import {
    TOGGLE_BUTTON, LOGIN, LOGOUT, APP_INITIALIZE,
    Login, Logout, ToggleButton, AppInitialize
} from "./types";

export const login: Login = (userId) => ({
    type: LOGIN,
    userId,
});

export const logout: Logout = () => ({
    type: LOGOUT,
});

export const appInitialize: AppInitialize = () => ({
    type: APP_INITIALIZE,
});

export const toggleButton: ToggleButton = (value) => ({
    type: TOGGLE_BUTTON,
    value,
});
