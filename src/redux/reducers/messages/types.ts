import { IDialog, IMessage } from "../../../interfaces";

export const SET_DIALOGS = 'MESSAGES::SET_DIALOGS';
export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const TOGGLE_DIALOGS_LOADING = 'MESSAGES::TOGGLE_DIALOGS_LOADING';
export const TOGGLE_MESSAGES_LOADING = 'MESSAGES::TOGGLE_MESSAGES_LOADING';
export const TOGGLE_BUTTON = 'MESSAGES::TOGGLE_BUTTON';

export interface MessagesState {
    dialogs: IDialog[];
    messages: IMessage[];
    lastMessageId: number;
    dialogsLoading: boolean;
    messagesLoading: boolean;
    isDisabled: boolean;
}

export type SetDialogs = (dialogs: IDialog[]) => {
    type: typeof SET_DIALOGS;
    dialogs: IDialog[];
};

export type SetMessages = (messages: IMessage[], lastId: number) => {
    type: typeof SET_MESSAGES;
    messages: IMessage[];
    lastId: number;
};

export type AddMessage = (message: IMessage) => {
    type: typeof ADD_MESSAGE;
    message: IMessage;
};

export type ToggleDialogsLoading = (value: boolean) => {
    type: typeof TOGGLE_DIALOGS_LOADING;
    value: boolean;
};

export type ToggleMessagesLoading = (value: boolean) => {
    type: typeof TOGGLE_MESSAGES_LOADING;
    value: boolean;
};

export type ToggleButton = (value: boolean) => {
    type: typeof TOGGLE_BUTTON;
    value: boolean;
};

export type MessagesActions =
    ReturnType<SetDialogs> |
    ReturnType<SetMessages> |
    ReturnType<AddMessage> |
    ReturnType<ToggleDialogsLoading> |
    ReturnType<ToggleMessagesLoading> |
    ReturnType<ToggleButton>;
