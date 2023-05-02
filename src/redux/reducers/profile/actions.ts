import {
    SET_PROFILE, TOGGLE_PROFILE_LOADING, TOGGLE_AVATARS_LOADING, SET_AVATARS, CHANGE_AVATAR, CHANGE_PROFILE_INFO,
    SetProfile, ToggleProfileLoading, ToggleAvatarsLoading, SetAvatars, ChangeAvatar, ChangeProfileInfo
} from "./types";

export const setProfile: SetProfile = (user) => ({
    type: SET_PROFILE,
    user,
});

export const setAvatars: SetAvatars = (avatars) => ({
    type: SET_AVATARS,
    avatars,
});

export const changeAvatar: ChangeAvatar = (id, url) => ({
    type: CHANGE_AVATAR,
    id,
    url
});

export const changeProfileInfo: ChangeProfileInfo = (data) => ({
    type: CHANGE_PROFILE_INFO,
    data
});

export const toggleProfileLoading: ToggleProfileLoading = (value) => ({
    type: TOGGLE_PROFILE_LOADING,
    value,
});

export const toggleAvatarsLoading: ToggleAvatarsLoading = (value) => ({
    type: TOGGLE_AVATARS_LOADING,
    value,
});
