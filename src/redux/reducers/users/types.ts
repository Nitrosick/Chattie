import { IUser } from "../../../interfaces";

export const SET_USERS = 'USERS::SET_USERS';
export const SHOW_MORE_USERS = 'USERS::SHOW_MORE_USERS';
export const TOGGLE_LOADING = 'USERS::TOGGLE_LOADING';
export const TOGGLE_BUTTON = 'USERS::TOGGLE_BUTTON';

export type Pagination = {
    startFrom: number;
    count: number;
    total: number;
};

export interface UsersState {
    users: IUser[];
    isLoading: boolean;
    isDisabled: boolean;
    pagination: Pagination;
};

export type SetUsers = (users: IUser[], total: number) => {
    type: typeof SET_USERS;
    users: IUser[];
    total: number;
};

export type ShowMoreUsers = (users: IUser[]) => {
    type: typeof SHOW_MORE_USERS;
    users: IUser[];
};

export type ToggleLoading = (value: boolean) => {
    type: typeof TOGGLE_LOADING;
    value: boolean;
};

export type ToggleButton = (value: boolean) => {
    type: typeof TOGGLE_BUTTON;
    value: boolean;
};

export type UsersActions =
    ReturnType<SetUsers> |
    ReturnType<ShowMoreUsers> |
    ReturnType<ToggleLoading> |
    ReturnType<ToggleButton>;
