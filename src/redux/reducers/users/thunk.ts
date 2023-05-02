import { ThunkAction } from "redux-thunk";
import { usersAPI } from "@api/api";
import { StoreState } from "@redux/index";
import { UsersActions } from "./types";
import { setUsers, showMoreUsers, toggleButton, toggleLoading } from "./actions";

type ThunkType = ThunkAction<void, StoreState, unknown, UsersActions>;

export const getUsersThunk = (count: number, filter: string): ThunkType => {
    return dispatch => {
        dispatch(toggleLoading(true));

        usersAPI.getUsers(count, filter).then(data => {
            if (data.status === 'ok') {
                dispatch(setUsers(data.users, data.total));
            }
            dispatch(toggleLoading(false));
        })
    };
};

export const showMoreUsersThunk = (
    count: number,
    startsFrom: number,
    filter: string
): ThunkType => {
    return (dispatch, getState) => {
        dispatch(toggleLoading(true));
        dispatch(toggleButton(true));

        usersAPI.showMoreUsers(count, startsFrom, filter).then(data => {
            if (data.status === 'ok') {
                dispatch(showMoreUsers(data.users));
            }

            dispatch(toggleLoading(false));
            const state = getState().users;
            if (state.users.length < state.pagination.total) dispatch(toggleButton(false));
        })
    };
};
