import { ThunkAction } from "redux-thunk";
import { profileAPI } from "@api/api";
import { StoreState } from "@redux/index";
import { ProfileActions, ProfileInputs } from "./types";
import { changeAvatar, changeProfileInfo, setAvatars, setProfile, toggleAvatarsLoading, toggleProfileLoading } from "./actions";

type ThunkType = ThunkAction<void, StoreState, unknown, ProfileActions>;

export const getProfileThunk = (userId: number): ThunkType => {
    return dispatch => {
        dispatch(toggleProfileLoading(true));

        profileAPI.getProfile(userId).then(data => {
            if (data.status === 'ok') dispatch(setProfile(data.user));
            dispatch(toggleProfileLoading(false));
        })
    };
};

export const getAvatarsListThunk = (): ThunkType => {
    return dispatch => {
        dispatch(toggleAvatarsLoading(true));

        profileAPI.getAvatarsList().then(data => {
            if (data.status === 'ok') dispatch(setAvatars(data.avatars));
            dispatch(toggleAvatarsLoading(false));
        })
    };
};

export const changeAvatarThunk = (avatarId: number): ThunkType => {
    return dispatch => {
        dispatch(toggleProfileLoading(true));

        profileAPI.changeAvatar(avatarId).then(data => {
            if (data.status === 'ok') dispatch(changeAvatar(data.avatar_id, data.avatar_url));
            dispatch(toggleProfileLoading(false));
        })
    };
};

export const changeProfileInfoThunk = (
    userData: ProfileInputs,
    setApiError: React.Dispatch<React.SetStateAction<string>>
): ThunkType => {
    return dispatch => {
        dispatch(toggleProfileLoading(true));

        profileAPI.changeProfileInfo(userData).then(data => {
            if (data.status === 'ok') {
                dispatch(changeProfileInfo(data.user_data));
                setApiError('');
            } else {
                setApiError(data.message);
            }
            dispatch(toggleProfileLoading(false));
        })
    };
};
