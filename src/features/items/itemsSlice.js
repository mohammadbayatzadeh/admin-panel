import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const getItems = createAsyncThunk("items/getPosts", async (thunkAPI) => {
  const res = await fetch("https://fakestoreapi.com/products").then((data) =>
    data.json()
  );
  return res;
});

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},

  extraReducers: {
    [getItems.pending]: (state) => {
      state.loading = true;
    },
    [getItems.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getItems.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = "error" + payload;
    },
  },
});

export const itemReducer = itemSlice.reducer;
export {getItems}
