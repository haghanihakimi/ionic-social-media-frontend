import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './reducers/profile';
import modalSlice from './reducers/modals';
import activeSheetSlice from './reducers/active-sheets';
import alertSlice from './reducers/alerts';

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    modals: modalSlice,
    activeSheets: activeSheetSlice,
    alerts: alertSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch