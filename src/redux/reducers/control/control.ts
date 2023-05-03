import { Reducer } from 'redux';
import {
    ControlActions, ControlState,
    SET_DIALOGS_OPENED, SET_MENU_OPENED
} from './types';

const initialState: ControlState = {
    menuOpened: false,
    dialogsOpened: false
};

export const controlReducer: Reducer<ControlState, ControlActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_OPENED:
            return {
                ...state,
                menuOpened: action.value
            }
        case SET_DIALOGS_OPENED:
            return {
                ...state,
                dialogsOpened: action.value
            }
        default:
            return state;
    }
};
