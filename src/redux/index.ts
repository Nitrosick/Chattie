import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './reducers/users/users';
import { messagesReducer } from './reducers/messages/messages';
import { profileReducer } from './reducers/profile/profile';
import { authReducer } from './reducers/auth/auth';

const reducers = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    profile: profileReducer,
    auth: authReducer
});

export const store = configureStore({
    reducer: reducers
});

export type StoreState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch
