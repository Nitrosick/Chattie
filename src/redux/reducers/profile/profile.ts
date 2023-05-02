import { Reducer } from 'redux';
import {
    SET_PROFILE, TOGGLE_PROFILE_LOADING, TOGGLE_AVATARS_LOADING,
    SET_AVATARS, CHANGE_AVATAR, CHANGE_PROFILE_INFO,
    ProfileActions, ProfileState
} from './types';

const initialState: ProfileState = {
    user: {
        id: 0,
        system_name: '',
        nickname: '',
        birth_date: '',
        last_visit: '',
        avatar_id: 0,
        avatar_url: '',
        status: '',
        city: ''
    },
    avatarsList: [],
    profileLoading: false,
    avatarsLoading: false
};

export const profileReducer: Reducer<ProfileState, ProfileActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, user: action.user };
        case SET_AVATARS:
            return { ...state, avatarsList: action.avatars };
        case CHANGE_AVATAR:
            return {
                ...state,
                user: {
                    ...state.user,
                    avatar_id: action.id,
                    avatar_url: action.url
                }
            };
        case CHANGE_PROFILE_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    nickname: action.data.nickname,
                    birth_date: action.data.birth_date,
                    city: action.data.city,
                    status: action.data.status
                }
            };
        case TOGGLE_PROFILE_LOADING:
            return {
                ...state,
                profileLoading: action.value
            };
        case TOGGLE_AVATARS_LOADING:
            return {
                ...state,
                avatarsLoading: action.value
            };
        default:
            return state;
    }
};
