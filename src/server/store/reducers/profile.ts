import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface profileState {
  firstname: string;
  lastname: string;
  username: string;
}

const initialState: profileState = {
    firstname: '',
    lastname: '',
    username: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Array<object>>) => {
        // 
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setProfile, 
} = profileSlice.actions

export default profileSlice.reducer