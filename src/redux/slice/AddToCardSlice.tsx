import { IProduct } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


let initialCartState: IProduct[] = [];
if (typeof window !== 'undefined') {
   initialCartState = JSON.parse(localStorage.getItem('cart') || '[]') as IProduct[];
}
export const CartSlice = createSlice({
   name: 'cart',
   initialState: {
      value: initialCartState
   },
   reducers: {
      addToCart: (state, action) => {
         const item = action.payload;
         const existingItem = state.value.find((cartItem: IProduct) => cartItem.id === item.id);
         if (existingItem) {
            state.value = state.value.map((cartItem: IProduct) =>
               cartItem.id === item.id ? { ...cartItem, cartQuantity: cartItem.cartQuantity && cartItem.cartQuantity + 1 } : cartItem);
            // toast.success('Product Quantity added to cart');
         } else {
            state.value.push({ ...item, cartQuantity: 1 });
            toast.success('Product added to cart');
         }
         localStorage.setItem('cart', JSON.stringify(state.value));
         console.log(state.value);
      },
      removeToCart: (state, action) => {
         const item = action.payload;
         const existingItem = state.value.find((cartItem: IProduct) => cartItem.id === item.id);
        if(existingItem && existingItem.cartQuantity && existingItem.cartQuantity > 1) {
            state.value = state.value.map((cartItem: IProduct) => 
               cartItem.id === item.id ? { ...cartItem , cartQuantity: cartItem.cartQuantity && cartItem.cartQuantity - 1 } : cartItem);
         // toast.success('Product Quantity remove to cart');

        } else {
         toast.warn('Product Quantity cannot be less than 1');
        }
      },
      deleteFromCart: (state, action) => {
         const item: IProduct = action.payload;
         state.value = state.value.filter((cartItem: IProduct) => cartItem.id !== item.id);
         localStorage.setItem('cart', JSON.stringify(state.value));
         toast.success('Product deleted to cart');
      }
   }
});

export const { addToCart, removeToCart , deleteFromCart } = CartSlice.actions;
export default CartSlice.reducer;