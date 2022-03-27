import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    viewMode: 'mix',
  },
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
  },
});

export default appSlice.reducer;
export const {setViewMode} = appSlice.actions;