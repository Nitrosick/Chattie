import axios, { AxiosResponse } from 'axios';
import { ProfileInputs } from '@redux/reducers/profile/types';
import { config } from 'src/config';

const instance = axios.create({
    baseURL: config.apiRoot,
    headers: {
        'content-type': 'text/json',
        'api-key': config.apiKey
    }
});

const getToken = () => {
    const token = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id');

    return {'access-token': token, 'user-id': userId};
};

const getData = (response: AxiosResponse) => {
    if (response.status === 200) return response.data;
    return {status: 'failed', code: response.status};
};

export const authAPI = {
    async autologon(): Promise<any> {
        const token = getToken();
        return instance
            .get('', {
                params: {auth: 'autologon'},
                headers: {...token}
            })
            .then(response => (getData(response)));
    },

    async login(login: string, password: string): Promise<any> {
        return instance
            .post('', {
                action: 'login',
                login: login,
                password: password
            })
            .then(response => (getData(response)));
    },

    async logout(): Promise<any> {
        const token = getToken();
        return instance
            .delete('', {
                params: {auth: 'logout'},
                headers: {...token}
            })
            .then(response => (getData(response)));
    },

    async registration(login: string, password: string): Promise<any> {
        return instance
            .post('', {
                action: 'registration',
                login: login,
                password: password
            })
            .then(response => (getData(response)));
    }
}

export const usersAPI = {
    async getUsers(count: number, filter: string): Promise<any> {
        return instance
            .get(config.apis.users, {
                params: {count: count, start: 0, filter: filter}
            })
            .then(response => (getData(response)));
    },

    async showMoreUsers(
        count: number,
        startsFrom: number,
        filter: string
    ): Promise<any> {
        return instance
            .get(config.apis.users, {
                params: {count: count, start: startsFrom, filter: filter}
            })
            .then(response => (getData(response)));
    }
}

export const profileAPI = {
    async getProfile(userId: number): Promise<any> {
        return instance
            .get(config.apis.profile, {
                params: {id: userId}
            })
            .then(response => (getData(response)));
    },

    async getAvatarsList(): Promise<any> {
        return instance
            .get(config.apis.avatars)
            .then(response => (getData(response)));
    },

    async changeAvatar(avatarId: number): Promise<any> {
        const token = getToken();
        return instance
            .put('', {
                action: 'change_avatar',
                avatar_id: avatarId
            }, {
                headers: {...token}
            })
            .then(response => (getData(response)));
    },

    async changeProfileInfo(data: ProfileInputs): Promise<any> {
        const token = getToken();
        return instance
            .put('', {
                action: 'change_profile_info',
                data: data
            }, {
                headers: {...token}
            })
            .then(response => (getData(response)));
    }
}

export const messagesAPI = {
    async getDialogs(): Promise<any> {
        const token = getToken();
        return instance
            .get(config.apis.dialogs, {
                headers: {...token}
            })
            .then(response => (getData(response)));
    },

    async addChat(targetId: number): Promise<any> {
        const token = getToken();
        return instance
            .post('', {
                action: 'add_chat',
                target_id: targetId
            }, {
                headers: {...token}
            })
            .then(response => (getData(response)));
    },

    async getMessages(chatId: number, lastId?: number): Promise<any> {
        const token = getToken();
        return instance
            .get(config.apis.messages, {
                params: {chat: chatId, last_id: lastId},
                headers: {...token}
            })
            .then(response => (getData(response)));
    },

    async sendMessage(text: string, chatId: string): Promise<any> {
        const token = getToken();
        return instance
            .post('', {
                action: 'send_message',
                text: text,
                chat_id: chatId
            }, {
                headers: {...token}
            })
            .then(response => (getData(response)));
    }
}
