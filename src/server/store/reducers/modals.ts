import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface modalState {
    followingModal: boolean;
    userProfileModal: boolean;
}

const initialState: modalState = {
    followingModal: false,
    userProfileModal: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleFollowingModal: (state, action: PayloadAction<boolean>) => {
        state.followingModal = action.payload
    },
    toggleUserProfileModal: (state, action: PayloadAction<boolean>) => {
        state.userProfileModal = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    toggleFollowingModal, 
    toggleUserProfileModal,
} = modalSlice.actions

export default modalSlice.reducer