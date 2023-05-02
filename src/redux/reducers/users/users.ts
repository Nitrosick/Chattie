import { Reducer } from 'redux';
import { config } from '../../../config';
import {
    SET_USERS, SHOW_MORE_USERS, TOGGLE_BUTTON, TOGGLE_LOADING,
    UsersActions, UsersState
} from './types';

const initialState: UsersState = {
    users: [],
    isLoading: false,
    isDisabled: false,
    pagination: {
        startFrom: 0,
        count: config.defaults.usersOnPage,
        total: config.defaults.totalUsers
    }
};

export const usersReducer: Reducer<UsersState, UsersActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                pagination: {
                    ...state.pagination,
                    startFrom: config.defaults.usersOnPage,
                    total: action.total
                }
            };
        case SHOW_MORE_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
                pagination: {
                    ...state.pagination,
                    startFrom: state.pagination.startFrom + state.pagination.count
                }
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.value
            };
        case TOGGLE_BUTTON:
            return {
                ...state,
                isDisabled: action.value
            };
        default:
            return state;
    }
};
