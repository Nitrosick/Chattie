export interface IUser {
    id: number;
    system_name: string;
    nickname: string;
    birth_date?: string;
    last_visit?: string;
    avatar_id?: number;
    avatar_url?: string;
    status?: string;
    city?: string;
}

export interface IAvatar {
    id: number;
    url: string;
}

export interface IDialog {
    id: number;
    user_id: number;
    nickname: string;
}

export interface IMessage {
    id: number;
    chat_id: number;
    sender_id: number;
    created_at: string;
    message: string;
}

export enum AvatarSize {
    Big = 'big',
    Medium = 'medium',
    Small = 'small'
}

export enum MessageSide {
    Left = 'left',
    Right = 'right',
}

export enum ButtonTypes {
    Submit = 'submit',
    Reset = 'reset',
    Button = 'button',
}
