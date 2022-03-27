import {createSlice} from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: 'file',
  initialState: {
    saveDocument: false,
    status: 'Ожидание...',
  },
  reducers: {
    switchSaveDocument: (state) => {
      state.saveDocument = !state.saveDocument;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
})

export default fileSlice.reducer;
export const { switchSaveDocument, setStatus} = fileSlice.actions;