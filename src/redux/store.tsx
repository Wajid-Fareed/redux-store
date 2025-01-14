import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slice/AddToCardSlice";

export default configureStore({
   reducer: {
      cart: CartSlice.reducer,
   },
})