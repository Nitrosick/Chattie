import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/users/users';
import { messagesReducer } from './reducers/messages/messages';
import { profileReducer } from './reducers/profile/profile';
import { authReducer } from './reducers/auth/auth';
import { controlReducer } from './reducers/control/control';

const reducers = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    profile: profileReducer,
    auth: authReducer,
    control: controlReducer
});

export const store = configureStore({
    reducer: reducers
});

export type StoreState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch
