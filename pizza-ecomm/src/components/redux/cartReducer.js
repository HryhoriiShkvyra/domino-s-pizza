import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.products.find((item) => item.id === action.payload.id)
      if(itemInCart) {
        itemInCart.quantity++
      } else {
        state.products.push({...action.payload, quantity: 1});
      }
    },

    incrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload)
      item.quantity++
    },

    decrementQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload)
      if(item.quantity === 1) {
        item.quantity = 1       
      } else {
        item.quantity--
      }
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, incrementQuantity, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer