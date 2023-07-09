import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CART_SLICE",
  initialState: {
    value: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeCartItem: (state, action) => {
        state.value = state.value.filter((item)=>{
            return item.id !== action.payload
        })
    },
  },
});
export const { addCart, removeCartItem } = cartSlice.actions;
export const store = configureStore({
  reducer: cartSlice.reducer,
});
