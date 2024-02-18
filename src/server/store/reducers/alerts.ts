import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface alertState {
    blockAlert: boolean,
    aboutAccount: boolean,
}

const initialState: alertState = {
    blockAlert: false,
    aboutAccount: false,
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    toggleBlockAlert: (state, action: PayloadAction<boolean>) => {
        state.blockAlert = action.payload
    },
    toggleAboutAccount: (state, action: PayloadAction<boolean>) => {
      state.aboutAccount = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    toggleBlockAlert, 
    toggleAboutAccount,
} = alertSlice.actions

export default alertSlice.reducer