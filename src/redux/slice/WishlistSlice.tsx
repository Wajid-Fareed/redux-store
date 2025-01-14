import { IProduct } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


let initialWhislistState: IProduct[] = [];
if (typeof window !== 'undefined') {
   initialWhislistState = JSON.parse(localStorage.getItem('wishlist') || '[]') as IProduct[];
}

export const wishlistSlice = (createSlice({
   name: 'wishlist',
   initialState: {
      value: initialWhislistState
   },
   reducers: {
      addToWishlist: (state , action) => {
         const items: IProduct = action.payload;
         const existingItem = state.value.find((wishlishItem) => wishlishItem.id === items.id);
         if (existingItem) {
            toast.error('Alraedy Product added to wishlist');

         }else {
            state.value.push({ ...items , isWishlist: items.isWishlist = true });       
            toast.success('Product deleted to wishlist');

            console.log(state.value, 'value')

         }
      }
   }
}))

export const { addToWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer