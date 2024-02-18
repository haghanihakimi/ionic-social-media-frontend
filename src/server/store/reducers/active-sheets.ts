import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface activeSheetState {
    followingActiveSheet: boolean
}

const initialState: activeSheetState = {
    followingActiveSheet: false,
}

export const activeSheetSlice = createSlice({
  name: 'activeSheet',
  initialState,
  reducers: {
    toggleFollowingAtiveSheet: (state, action: PayloadAction<boolean>) => {
      // 
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    toggleFollowingAtiveSheet, 
} = activeSheetSlice.actions

export default activeSheetSlice.reducer