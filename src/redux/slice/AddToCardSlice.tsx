import { IProduct } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
   name: 'cart',
   initialState: {
      value: [] as IProduct[],
   },
   reducers: {
      addtocart: (state , action) => {
         const item = action.payload;
         const existingItem = state.value && state.value.find((cartItem: IProduct) => cartItem.id === item.id);
         if (existingItem){
            state.value = state.value.map((cartItem: IProduct) => 
               cartItem.id === item.id ? { ...cartItem , cartQuantity: cartItem.cartQuantity && cartItem.cartQuantity + 1} : cartItem)

         } else{
            state.value.push({...item , cartQuantity: 1});
         }
         console.log(state.value);
      }
   }
});

export const { addtocart } = CartSlice.actions;
export default CartSlice.reducer;