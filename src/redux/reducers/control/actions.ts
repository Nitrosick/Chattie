import {
    SET_DIALOGS_OPENED, SET_MENU_OPENED,
    SetDialogsOpened, SetMenuOpened
} from "./types";

export const setMenuOpened: SetMenuOpened = (value) => ({
    type: SET_MENU_OPENED,
    value,
});

export const setDialogsOpened: SetDialogsOpened = (value) => ({
    type: SET_DIALOGS_OPENED,
    value,
});
