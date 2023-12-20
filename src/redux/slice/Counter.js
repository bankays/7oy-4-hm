import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    add: [],
  },

  reducers: {
    saveusers: (state, action) => {
      // state.add.push(action.payload);
      const exist = state.add.findIndex(
        (prod) => prod.id === action.payload.id
      );
      if (exist === -1) {
        state.add.push(action.payload);
      }
    },
  },
});
export const { saveusers } = counterSlice.actions;
export default counterSlice.reducer;
