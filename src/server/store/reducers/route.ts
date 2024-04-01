import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface routeState {
  route: string;
}

const initialState: routeState = {
  route: '',
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string>) => {
      // Split the route string by '/'
      const parts = action.payload.split('/');
      // Filter out the part with a number
      const filteredParts = parts.filter(part => !/\d+/.test(part));

      state.route = filteredParts.join('/');
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setRoute,
} = routeSlice.actions

export default routeSlice.reducer