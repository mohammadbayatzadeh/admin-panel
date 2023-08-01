import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "../features/items/itemsSlice";
import themeReducer from "../features/theme/themeSlice";

const Store = configureStore({
  reducer: {
    items: itemReducer,
    theme: themeReducer,
  },
});

export default Store;
