import { createSlice } from '@reduxjs/toolkit'

const Cart = JSON.parse(localStorage.getItem("Cart") || "[]")

const initialState = {
  numberItems: Cart.length,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add1Product: (state) => {
      state.numberItems += 1
    },
    remove1Product: (state) => {
      state.numberItems -= 1
    },
    addProductToCart: (state, action) => {
      state.numberItems += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add1Product, remove1Product, addProductToCart } = cartSlice.actions

export default cartSlice.reducer