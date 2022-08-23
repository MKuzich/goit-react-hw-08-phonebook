import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { authApi } from './authApi';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware,
  ],
});
