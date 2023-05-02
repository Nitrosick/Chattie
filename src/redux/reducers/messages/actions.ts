import {
    ADD_MESSAGE, SET_DIALOGS, SET_MESSAGES, TOGGLE_DIALOGS_LOADING, TOGGLE_BUTTON, TOGGLE_MESSAGES_LOADING,
    AddMessage, SetDialogs, SetMessages, ToggleDialogsLoading, ToggleButton, ToggleMessagesLoading
} from "./types";

export const setDialogs: SetDialogs = (dialogs) => ({
    type: SET_DIALOGS,
    dialogs,
});

export const setMessages: SetMessages = (messages, lastId) => ({
    type: SET_MESSAGES,
    messages,
    lastId,
});

export const addMessage: AddMessage = (message) => ({
    type: ADD_MESSAGE,
    message,
});

export const toggleDialogsLoading: ToggleDialogsLoading = (value) => ({
    type: TOGGLE_DIALOGS_LOADING,
    value,
});

export const toggleMessagesLoading: ToggleMessagesLoading = (value) => ({
    type: TOGGLE_MESSAGES_LOADING,
    value,
});

export const toggleButton: ToggleButton = (value) => ({
    type: TOGGLE_BUTTON,
    value,
});
