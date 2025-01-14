import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slice/AddToCardSlice";
import { wishlistSlice } from "./slice/WishlistSlice";

export default configureStore({
   reducer: {
      cart: CartSlice.reducer,
      wishlist: wishlistSlice.reducer
   },
})