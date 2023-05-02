import {
    SET_USERS, SHOW_MORE_USERS, TOGGLE_LOADING, TOGGLE_BUTTON,
    SetUsers, ShowMoreUsers, ToggleLoading, ToggleButton
} from "./types";

export const setUsers: SetUsers = (users, total) => ({
    type: SET_USERS,
    users,
    total,
});

export const showMoreUsers: ShowMoreUsers = (users) => ({
    type: SHOW_MORE_USERS,
    users,
});

export const toggleLoading: ToggleLoading = (value) => ({
    type: TOGGLE_LOADING,
    value,
});

export const toggleButton: ToggleButton = (value) => ({
    type: TOGGLE_BUTTON,
    value,
});
