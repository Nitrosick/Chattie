import { Reducer } from 'redux';
import {
    SET_DIALOGS, SET_MESSAGES, TOGGLE_DIALOGS_LOADING, TOGGLE_BUTTON, ADD_MESSAGE,
    MessagesActions, MessagesState
} from './types';

const initialState: MessagesState = {
    dialogs: [],
    messages: [],
    lastMessageId: 0,
    dialogsLoading: false,
    messagesLoading: false,
    isDisabled: false
};

export const messagesReducer: Reducer<MessagesState, MessagesActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return { ...state, dialogs: action.dialogs };
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
                lastMessageId: action.lastId ? action.lastId : state.lastMessageId
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message],
                lastMessageId: action.message.id
            }
        case TOGGLE_DIALOGS_LOADING:
            return {
                ...state,
                dialogsLoading: action.value
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
