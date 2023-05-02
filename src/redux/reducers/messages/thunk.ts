import { NavigateFunction } from "react-router-dom";
import { ThunkAction } from "redux-thunk";
import { messagesAPI } from "@api/api";
import { StoreState } from "@redux/index";
import { MessagesActions } from "./types";
import { IMessage } from "src/interfaces";
import { addMessage, setDialogs, setMessages, toggleButton, toggleDialogsLoading, toggleMessagesLoading } from "./actions";

type ThunkType = ThunkAction<void, StoreState, unknown, MessagesActions>;

export const getDialogsThunk = (): ThunkType => {
    return dispatch => {
        dispatch(toggleDialogsLoading(true));

        messagesAPI.getDialogs().then(data => {
            if (data.status === 'ok') {
                dispatch(setDialogs(data.chats));
            };
            dispatch(toggleDialogsLoading(false));
        })
    };
};

export const addChatThunk = (targetId: number, navigate: NavigateFunction): ThunkType => {
    return (dispatch) => {
        dispatch(toggleButton(true));

        messagesAPI.addChat(targetId).then(data => {
            if (data.status === 'ok') {
                navigate(`/chats/${data.chat_id}`);
            };
            dispatch(toggleButton(false));
        })
    };
};

export const getMessagesThunk = (chatId: number): ThunkType => {
    return dispatch => {
        dispatch(toggleMessagesLoading(true));

        messagesAPI.getMessages(chatId).then(data => {
            if (data.status === 'ok') {
                dispatch(setMessages(data.messages, data.last_id));
            };
            dispatch(toggleMessagesLoading(false));
        })
    };
};

export const getNewMessagesThunk = (chatId: number, lastId: number): ThunkType => {
    return dispatch => {
        messagesAPI.getMessages(chatId, lastId).then(data => {
            if (data.status === 'ok') {
                data.messages.forEach((msg: IMessage) => {
                    dispatch(addMessage(msg));
                });
            };
        })
    };
};

export const sendMessageThunk = (text: string, chatId: string): ThunkType => {
    return (dispatch) => {
        messagesAPI.sendMessage(text, chatId).then(data => {
            if (data.status === 'ok') {
                dispatch(addMessage(data.message));
            };
        })
    };
};
