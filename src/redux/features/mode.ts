import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const mode = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
