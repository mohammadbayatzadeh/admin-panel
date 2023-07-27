import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "../features/items/itemsSlice";

const Store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export default Store;
