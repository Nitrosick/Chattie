export const LOGIN = 'AUTH::LOGIN';
export const LOGOUT = 'AUTH::LOGOUT';
export const APP_INITIALIZE = 'AUTH::APP_INITIALIZE';
export const TOGGLE_BUTTON = 'AUTH::TOGGLE_BUTTON';

export interface AuthState {
    isLogged: boolean;
    userId: number | null;
    isAppInitialized: boolean;
    isDisabled: boolean;
};

export type Login = (userId: number) => {
    type: typeof LOGIN;
    userId: number;
};

export type Logout = () => {
    type: typeof LOGOUT;
};

export type AppInitialize = () => {
    type: typeof APP_INITIALIZE;
};

export type ToggleButton = (value: boolean) => {
    type: typeof TOGGLE_BUTTON;
    value: boolean;
};

export type AuthActions =
    ReturnType<Login> |
    ReturnType<Logout> |
    ReturnType<AppInitialize> |
    ReturnType<ToggleButton>;
