export const SET_MENU_OPENED = 'CONTROL::SET_MENU_OPENED';
export const SET_DIALOGS_OPENED = 'CONTROL::SET_DIALOGS_OPENED';

export interface ControlState {
    menuOpened: boolean;
    dialogsOpened: boolean;
};

export type SetMenuOpened = (value: boolean) => {
    type: typeof SET_MENU_OPENED;
    value: boolean;
};

export type SetDialogsOpened = (value: boolean) => {
    type: typeof SET_DIALOGS_OPENED;
    value: boolean;
};

export type ControlActions =
    ReturnType<SetMenuOpened> |
    ReturnType<SetDialogsOpened>;
