import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface modalState {
    followingOptionsModal: boolean;
    ignoreOptionsModal: boolean;
    userProfileModal: boolean;
    restrictOptionsModal: boolean;
}

const initialState: modalState = {
    followingOptionsModal: false,
    ignoreOptionsModal: false,
    userProfileModal: false,
    restrictOptionsModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleFollowingOptionsModal: (state, action: PayloadAction<boolean>) => {
            state.followingOptionsModal = action.payload
        },
        toggleIgnoreOptionsModal: (state, action: PayloadAction<boolean>) => {
            state.ignoreOptionsModal = action.payload
        },
        toggleUserProfileModal: (state, action: PayloadAction<boolean>) => {
            state.userProfileModal = action.payload
        },
        toggleRestrictOptionsModal: (state, action: PayloadAction<boolean>) => {
            state.restrictOptionsModal = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    toggleFollowingOptionsModal,
    toggleIgnoreOptionsModal,
    toggleUserProfileModal,
    toggleRestrictOptionsModal,
} = modalSlice.actions

export default modalSlice.reducer