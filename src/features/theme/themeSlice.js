import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightMode: (state, action) => {
      state.theme = "light";
    },
    darkMode: (state, action) => {
      state.theme = "dark";
    },
  },
});

export default themeSlice.reducer;
export const { lightMode, darkMode } = themeSlice.actions;
