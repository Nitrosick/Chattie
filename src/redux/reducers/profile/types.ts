import { IAvatar, IUser } from "../../../interfaces";

export const SET_PROFILE = 'PROFILE::SET_PROFILE';
export const SET_AVATARS = 'PROFILE::SET_AVATARS';
export const CHANGE_AVATAR = 'PROFILE::CHANGE_AVATAR';
export const CHANGE_PROFILE_INFO = 'PROFILE::CHANGE_PROFILE_INFO';
export const TOGGLE_PROFILE_LOADING = 'PROFILE::TOGGLE_PROFILE_LOADING';
export const TOGGLE_AVATARS_LOADING = 'PROFILE::TOGGLE_AVATARS_LOADING';

export interface ProfileState {
    user: IUser;
    avatarsList: IAvatar[];
    profileLoading: boolean;
    avatarsLoading: boolean;
};

export interface ProfileInputs {
    nickname: string;
    birth_date: string;
    city: string;
    status: string;
}

export type SetProfile = (user: IUser) => {
    type: typeof SET_PROFILE;
    user: IUser;
};

export type SetAvatars = (avatars: IAvatar[]) => {
    type: typeof SET_AVATARS;
    avatars: IAvatar[];
};

export type ChangeAvatar = (id: number, url: string) => {
    type: typeof CHANGE_AVATAR;
    id: number;
    url: string;
};

export type ChangeProfileInfo = (data: ProfileInputs) => {
    type: typeof CHANGE_PROFILE_INFO;
    data: ProfileInputs;
};

export type ToggleProfileLoading = (value: boolean) => {
    type: typeof TOGGLE_PROFILE_LOADING;
    value: boolean;
};

export type ToggleAvatarsLoading = (value: boolean) => {
    type: typeof TOGGLE_AVATARS_LOADING;
    value: boolean;
};

export type ProfileActions =
    ReturnType<SetProfile> |
    ReturnType<SetAvatars> |
    ReturnType<ChangeAvatar> |
    ReturnType<ChangeProfileInfo> |
    ReturnType<ToggleProfileLoading> |
    ReturnType<ToggleAvatarsLoading>;
